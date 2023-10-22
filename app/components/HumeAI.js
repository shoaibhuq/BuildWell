const axios = require("axios");
require("dotenv").config();

const jobStart = async (imageBase) => {
  const jpegBase = imageBase;

  // Form data for job
  const form = new FormData();
  form.append(
    "json",
    '{"models":{"face":{"fps_pred":3,"prob_threshold":0.99,"identify_faces":false,"min_face_size":60,"save_faces":false},"prosody":{"granularity":"utterance","identify_speakers":false,"window":{"length":4,"step":1}},"language":{"granularity":"word","identify_speakers":false},"ner":{"identify_speakers":false}},"transcription":{"language":null},"notify":false}'
  );
  form.append("file", jpegBase);

  // Make request to initiate experession detection job
  const options = {
    method: "POST",
    url: "https://api.hume.ai/v0/batch/jobs",
    headers: {
      accept: "application/json",
      "content-type":
        "multipart/form-data; boundary=---011000010111000001101001",
      "X-Hume-Api-Key": process.env.HUME_API_KEY,
    },
    data: "[form]",
  };

  // Return response with job ID
  let data;
  const response = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      data = response.data.job_id;
    })
    .catch(function (error) {
      console.error(error);
    });
  return data;
};

const predictions = async (jobID) => {
  const options = {
    method: "GET",
    url: `https://api.hume.ai/v0/batch/${jobID}/id/predictions`,
    headers: {
      accept: "application/json; charset=utf-8",
      "X-Hume-Api-Key": process.env.HUME_API_KEY,
    },
  };

  const response = await axios.request(options);

  const data =
    response[0].results.predictions[0].models.face.grouped_predictions[0]
      .predictions[0].emotions;

  data.sort((a, b) => b.score - a.score);

  const preds = {
    emotion1: data[0],
    emotion2: data[1],
    emotion3: data[2],
    emotion4: data[3],
    emotion5: data[4],
  };

  return preds;
};

export const analyzeEmotion = async (imageBase64) => {
  const jobID = await jobStart(imageBase64);
  const topEmotions = await predictions(jobID);
  return topEmotions;
};
