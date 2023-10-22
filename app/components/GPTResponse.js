const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let messages = [{ role: "system", content: process.env.GPT_SYSTEM_MESSAGE }];

export const getFeedback = async (
  res1,
  res2,
  res3,
  res4,
  face1,
  face2,
  face3,
  face4,
  checkIn
) => {
  try {
    let message;
    if (checkIn) {
      message = `Check-in questions, responses, and facial expressions:
            
            1. Question: How are you feeling this morning?
            Response: ${res1}
            Facial Metrics: ${face1}
            
            2. Question: What's been on your mind since you last worked?
            Response: ${res2}
            Facial Metrics: ${face2}
            
            3. Question: What are your goals for today?
            Response: ${res3}
            Facial Metrics: ${face3}
            
            4. Question: What could make today less stressful?
            Response: ${res4}
            Facial Metrics: ${face4}`;
    } else {
      message = `Check-out questions, responses, and facial expressions:
            
            1. Question: How did your day go?
            Response: ${res1}
            Facial Metrics: ${face1}
            
            2. Question: What did you do today?
            Response: ${res2}
            Facial Metrics: ${face2}
            
            3. Question: How are you dealing with the demands of the job?
            Response: ${res3}
            Facial Metrics: ${face3}
            
            4. Question: What are you looking forward to?
            Response: ${res4}
            Facial Metrics: ${face4}`;
    }
    messages.push(message);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.choices[0].message.content;
  } catch (err) {
    return err.message;
  }
};
