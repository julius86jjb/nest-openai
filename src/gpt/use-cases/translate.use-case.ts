import { OpenAI } from 'openai';


interface Options {
    prompt: string;
    lang: string;
}


export const translateUseCase = async (openai: OpenAI, options: Options) => {

    const { prompt, lang } = options;

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Translate the following text into ${lang}: ${ prompt }`
            }

        ],
        
        model: "gpt-3.5-turbo",
        temperature: 0.3,
        max_tokens: 150,

    });

    // console.log(completion.choices[0].message);
    return {
        message: completion.choices[0].message.content
    }
    // return completion.choices[0].message.content;
}