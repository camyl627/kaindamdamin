const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.analyzeMood = async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a kind, empathetic nutrition assistant. Suggest a meal based on the user’s mood.',
        },
        {
          role: 'user',
          content: input,
        },
      ],
    });

    const suggestion = response.data.choices[0].message.content;
    res.status(200).json({ message: suggestion });
  } catch (error) {
    console.error('OpenAI Error:', error.message);
    res.status(500).json({ error: 'Something went wrong with OpenAI.' });
  }
};
 