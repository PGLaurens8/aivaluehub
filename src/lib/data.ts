// Data from the user's provided HTML
export const aiData = {
    roles: [
        { name: 'Machine Learning Engineer', focus: 'Designing & deploying AI models', responsibilities: 'Optimizing algorithms, deploying models, managing data pipelines, statistical analysis.', skills: 'ML platforms (Azure, AWS), Python, R, C++, statistics, data modeling.' },
        { name: 'NLP Engineer', focus: 'Understanding human language', responsibilities: 'Developing NLP algorithms, training models with text data, conducting experiments.', skills: 'NLP algorithms, data preprocessing, machine learning, relevant certifications.' },
        { name: 'AI Ethics Consultant', focus: 'Ensuring ethical AI', responsibilities: 'Conducting ethical impact assessments, advising on compliance, developing ethical guidelines.', skills: 'AI/ML knowledge, ethics, philosophy, analytical thinking, communication.' },
        { name: 'AI Research Scientist', focus: 'Advancing AI capabilities', responsibilities: 'Developing new algorithms/models, designing experiments, publishing findings.', skills: 'Ph.D. (Computer Science, Data Science, Math), research methodology.' },
        { name: 'AI Product Manager', focus: 'Overseeing AI product lifecycle', responsibilities: 'Defining product vision/strategy, market research, prioritizing features.', skills: 'AI/ML understanding, project management, leadership, data analysis, UX design.' },
        { name: 'AI Engineer', focus: 'Developing & training AI algorithms', responsibilities: 'Pulling data, creating/testing ML models, implementing AI applications via APIs/code.', skills: 'Software development, programming, data science, data engineering.' },
        { name: 'AI Data Engineer', focus: 'Building data pipelines for AI', responsibilities: 'Building/maintaining data pipelines, managing data architectures, ensuring data quality.', skills: 'Data pipelines (ETL), AI/ML frameworks, Python, SQL, NoSQL, cloud infrastructure.' },
        { name: 'AI Trainer', focus: 'Refining AI interpretation', responsibilities: 'Cleaning/organizing data, annotating data, shaping conversational flows, integrating feedback.', skills: 'Programming basics (Python, SQL), data management, analytical thinking.' },
        { name: 'Chatbot Developer', focus: 'Crafting conversational AI', responsibilities: 'Designing interfaces, integrating with systems, improving understanding, optimizing performance.', skills: 'Chatbot tools (Dialogflow, Rasa), Python, Node.js, NLP/ML basics.' },
        { name: 'AI Solutions Architect', focus: 'Designing scalable AI/ML systems', responsibilities: 'Designing end-to-end solutions, implementing models, creating NLP architectures, technical leadership.', skills: 'ML/Deep Learning, NLP, Generative AI, cloud platforms (AWS, GCP, Azure).' },
        { name: 'AI Consultant', focus: 'Guiding AI integration', responsibilities: 'Identifying AI opportunities, designing/implementing models, training employees, providing support.', skills: 'Python, R, SQL, ML algorithms, data analysis, strong communication.' },
    ],
    companies: [
         { name: 'OpenAI', type: 'Tech Giant', focus: 'Conversational AI, Multimodal Models (GPT series, Sora)', example: 'ChatGPT, GPT-4o, text-to-video with Sora' },
         { name: 'Google (DeepMind)', type: 'Tech Giant', focus: 'Foundational Research, AI-driven Healthcare, Multimodal AI (Gemini)', example: 'Gemini 1.5 Pro, Med-Gemini for medical diagnostics' },
         { name: 'NVIDIA', type: 'Tech Giant', focus: 'AI Hardware (GPUs), Robotics, Digital Twins', example: 'Blackwell B200 GPUs, Isaac platform for robotics' },
         { name: 'Microsoft AI', type: 'Tech Giant', focus: 'Embedded AI (Azure AI), AI Agents, Responsible AI', example: 'Microsoft 365 Copilot, Phi-3 small language models' },
         { name: 'Meta AI', type: 'Tech Giant', focus: 'Open-Source Models, AR/VR, On-Device AI', example: 'Llama 3 open-source model, Ray-Ban Meta Glasses' },
         { name: 'Amazon AI (AWS)', type: 'Tech Giant', focus: 'AI/ML Tools, Cloud Computing (SageMaker)', example: 'Trainium AI chips, Amazon Q Developer assistant' },
         { name: 'Openxcell', type: 'Specialized AI Dev', focus: 'Custom AI Solutions (Healthcare, Retail), Generative AI', example: 'AI-driven financial tracking app with chatbot' },
         { name: 'Azumo', type: 'Specialized AI Dev', focus: 'Intelligent AI Apps, LLM fine-tuning, NLP', example: 'HealthyScreen.ai for health monitoring' },
         { name: '10Pearls', type: 'Specialized AI Dev', focus: 'Product Design, ML, AI, Voice Recognition, AR', example: 'Collaborations with Vodafone, Stride, Stripe' },
         { name: 'Qubika', type: 'Specialized AI Dev', focus: 'Product Design, Data & AI, Generative AI, Computer Vision', example: 'AI-driven supply chain system for forecasting' },
         { name: 'SoluLab', type: 'Specialized AI Dev', focus: 'AI Consulting, App/Chatbot/Agent Dev', example: 'ShopSmart (AI-driven retail app)' },
         { name: 'STX Next', type: 'Specialized AI Dev', focus: 'AI & Data Solutions (Python), Cloud/DevOps', example: 'AI-based fraud detection system for fintech' }
    ],
    tools: [
        { name: 'ChatGPT', type: 'Generative AI', use: 'Conversational AI for answering questions, writing, and brainstorming.' },
        { name: 'Google Gemini', type: 'Generative AI', use: 'Multimodal conversational AI for text, image, and code generation.' },
        { name: 'Microsoft Copilot', type: 'Generative AI', use: 'AI assistant integrated into Windows, Edge, and Microsoft 365.' },
        { name: 'Anthropic Claude', type: 'Generative AI', use: 'Conversational AI focused on safety and helpfulness for complex tasks.' },
        { name: 'Midjourney', type: 'Generative AI', use: 'High-quality image generation from text prompts via Discord.' },
        { name: 'xAI Grok', type: 'Generative AI', use: 'Conversational AI with real-time information access from the X platform.' },
        { name: 'TensorFlow', type: 'Open-Source Framework', use: 'Large-scale AI applications, deep learning' },
        { name: 'PyTorch', type: 'Open-Source Framework', use: 'Research and production, dynamic models' },
        { name: 'Keras', type: 'Open-Source Framework', use: 'Rapid prototyping and user-friendly deep learning interface.' },
        { name: 'Hugging Face Transformers', type: 'Open-Source Framework', use: 'Accessing and training state-of-the-art NLP models.' },
        { name: 'Google Vertex AI', type: 'Cloud Platform', use: 'Unified platform for building, deploying, and scaling ML models.' },
        { name: 'Amazon SageMaker', type: 'Cloud Platform', use: 'End-to-end ML platform for enterprise AI development.' },
        { name: 'Microsoft Azure ML', type: 'Cloud Platform', use: 'Automated ML pipelines and responsible AI tooling.' },
        { name: 'Databricks', type: 'Cloud Platform', use: 'Unified data and AI platform for large-scale data engineering.' },
        { name: 'GitHub Copilot', type: 'Specialized Tool', use: 'AI-powered code completion and suggestions for developers.' },
        { name: 'LangChain', type: 'Specialized Tool', use: 'Framework for developing applications powered by LLMs.' },
        { name: 'Weights & Biases', type: 'Specialized Tool', use: 'MLOps platform for tracking experiments and managing models.' },
        { name: 'Tableau', type: 'Specialized Tool', use: 'Data visualization with embedded predictive capabilities' }
    ],
    affiliates: [
        { name: 'Google (Google Cloud / Google AI / Gemini)', type: 'Major LLM Developer', focus: 'Multimodal AI, large-scale language models, AI infrastructure.', affiliateProgram: 'Google Cloud Partner Advantage Program (business-focused)', affiliatePotential: 'Less direct for individual AI tool links; more geared towards cloud solution providers.' },
        { name: 'OpenAI', type: 'Major LLM Developer', focus: 'Pioneering generative AI, foundational models (GPT, DALL-E).', affiliateProgram: 'ChatGPT Plus Affiliate Program (Yes, for subscriptions)', affiliatePotential: 'High for consumer-facing AI mentors focusing on ChatGPT.' },
        { name: 'Microsoft (Azure AI)', type: 'Major LLM Developer', focus: 'Integrating AI across products, enterprise-grade AI infrastructure.', affiliateProgram: 'Microsoft Partner Network (MPN) (business-focused)', affiliatePotential: 'More for enterprise solutions and cloud integration.' },
        { name: 'Meta (Facebook AI)', type: 'Major LLM Developer', focus: 'Open-source AI research, foundation models (LLaMA).', affiliateProgram: 'No publicly advertised program for AI models.', affiliatePotential: 'Low for direct AI tool linking.' },
        { name: 'Anthropic', type: 'Major LLM Developer', focus: 'AI safety, responsible AI, powerful general-purpose AI (Claude).', affiliateProgram: 'No publicly advertised program for Claude or API.', affiliatePotential: 'Low for direct AI tool linking.' },
        { name: 'Jasper AI', type: 'Specialized AI Tool', focus: 'AI writing assistant for marketing, blogs, social media.', affiliateProgram: 'Yes, well-known affiliate program.', affiliatePotential: 'High for content creators, marketers, bloggers.' },
        { name: 'Copy.ai', type: 'Specialized AI Tool', focus: 'AI-powered copywriting tool for marketing.', affiliateProgram: 'Yes, typically offers an affiliate program.', affiliatePotential: 'High for content creators and marketers.' },
        { name: 'Leonardo.AI', type: 'Specialized AI Tool', focus: 'User-friendly platform for generating images from text.', affiliateProgram: 'Yes, has an affiliate program.', affiliatePotential: 'Medium to High for creators focusing on AI art.' },
        { name: 'Descript', type: 'Specialized AI Tool', focus: 'AI-powered video/audio editing, transcription, podcasting.', affiliateProgram: 'Yes, has an affiliate program.', affiliatePotential: 'High for content creators, podcasters, video producers.' },
        { name: 'RunwayML', type: 'Specialized AI Tool', focus: 'Suite of AI tools for video editing, image generation, 3D (text-to-video).', affiliateProgram: 'Yes, has an affiliate program.', affiliatePotential: 'High for video creators, artists, filmmakers.' },
        { name: 'Synthesia', type: 'Specialized AI Tool', focus: 'AI video generation with realistic avatars.', affiliateProgram: 'Yes, typically offers an affiliate program.', affiliatePotential: 'High for businesses/individuals creating marketing, training videos.' },
        { name: 'HeyGen', type: 'Specialized AI Tool', focus: 'AI video generation with realistic avatars.', affiliateProgram: 'Yes, typically offers an affiliate program.', affiliatePotential: 'High for businesses/individuals creating marketing, training videos.' },
        { name: 'Zapier', type: 'Specialized AI Tool', focus: 'Connects apps and automates workflows, integrates LLMs.', affiliateProgram: 'Yes, has an affiliate program.', affiliatePotential: 'High for users teaching automation, productivity.' },
        { name: 'n8n', type: 'Specialized AI Tool', focus: 'Connects apps and automates workflows, integrates LLMs.', affiliateProgram: 'Yes, has an affiliate program.', affiliatePotential: 'High for users teaching automation, productivity.' },
    ],
    caseStudies: [
        { company: 'Netflix', industry: 'Media', valueDriver: 'Personalization', metric: '$1B+ annual value from retention', description: 'AI recommendation system analyzes viewing history to personalize content suggestions, reducing churn and saving over $1 billion annually.' },
        { company: 'Amazon', industry: 'Retail', valueDriver: 'Personalization', metric: '35% revenue from recommendations', description: 'Engine analyzes browse, purchase, and social data to suggest relevant products.' },
        { company: 'Spotify', industry: 'Media', valueDriver: 'Personalization', metric: '40M+ active users for AI DJ', description: 'AI DJ provides a personalized listening experience with dynamic commentary, driving significant user engagement.' },
        { company: 'Coca-Cola', industry: 'Retail', valueDriver: 'Creative Automation', metric: 'Launched in weeks, not months', description: 'Used generative AI to create initial branding, ad copy, and imagery for a new beverage, drastically cutting down creative timelines.' },
        { company: 'KLM Royal Dutch Airlines', industry: 'Travel', valueDriver: 'Creative Automation', metric: '40% higher email open rates', description: 'Used AI to generate personalized marketing copy, leading to more effective email campaigns and higher engagement.' },
        { company: 'L\'Oréal', industry: 'Cosmetics', valueDriver: 'Creative Automation', metric: 'Weeks to days for concepts', description: 'Used Google\'s Imagen 3 to assist marketing teams with concept generation, storyboards, and packaging design.' },
        { company: 'Wayfair', industry: 'Retail', valueDriver: 'Operational Efficiency', metric: '50% reduction in agent resolutions', description: 'AI-powered chatbot handles customer service inquiries, freeing up human agents for more complex issues.' },
        { company: 'Siemens', industry: 'Manufacturing', valueDriver: 'Operational Efficiency', metric: '30% downtime reduction', description: 'AI-powered factories use predictive maintenance to forecast equipment failures and reduce downtime.' },
        { company: 'Unilever', industry: 'Manufacturing', valueDriver: 'Operational Efficiency', metric: '€800M in savings', description: 'Created digital twin factories to optimize production processes and predict outcomes, resulting in massive cost savings.' },
        { company: 'Morgan Stanley', industry: 'Finance', valueDriver: 'Operational Efficiency', metric: 'Minutes to seconds for queries', description: 'Deployed a custom AI assistant, trained on 100,000+ internal documents, to give financial advisors instant answers to complex questions.' },
        { company: 'inVia Robotics', industry: 'Logistics', valueDriver: 'Supply Chain', metric: '5x productivity improvement', description: 'Automates warehouse tasks with Goods-to-Person robot systems that pick and move items.' },
        { company: 'DHL', industry: 'Logistics', valueDriver: 'Supply Chain', metric: '15% efficiency gain in sorting', description: 'Uses AI-powered computer vision to scan and sort packages, improving speed and accuracy.' },
        { company: 'Google DeepMind', industry: 'Healthcare', valueDriver: 'Innovation', metric: 'Discovered 2.2M new materials', description: 'AI model GNoME discovered millions of stable crystal structures, accelerating materials science research for batteries and superconductors.' },
        { company: 'Genentech', industry: 'Healthcare', valueDriver: 'Innovation', metric: '25% faster clinical trial recruitment', description: 'Uses AI to analyze patient data and match individuals to suitable clinical trials more efficiently.' },
        { company: 'Blue River Tech', industry: 'Agriculture', valueDriver: 'Innovation', metric: '90% herbicide reduction', description: '\'See & Spray\' system uses computer vision to differentiate crops from weeds for precise spraying.' },
        { company: 'CattleEye', industry: 'Agriculture', valueDriver: 'Innovation', metric: 'Improved disease detection', description: 'Image recognition AI provides real-time monitoring of livestock behavior and health.' },
    ],
    insights: [
        { title: 'Ethical AI and Governance', content: 'As AI becomes more integrated, questions of data privacy, algorithmic bias, and transparency are gaining prominence. The demand for roles like AI Ethics Consultant and a focus on responsible AI principles highlight the importance of building trustworthy and fair AI systems.' },
        { title: 'Workforce Transformation', content: 'AI automates tasks but also creates new roles and amplifies human productivity. Organizations must invest in reskilling their workforce for analytical, problem-solving, and AI-management roles to maximize benefits and ensure a smooth transition.' },
        { title: 'The Hybrid Human-AI Model', content: 'The "Both/And Principle" will continue to guide development, emphasizing symbiotic human-AI collaboration. This is critical in fields like healthcare and customer service where human empathy and judgment remain indispensable.' },
        { title: 'From Reactive to Proactive Operations', content: 'A profound shift is underway from reactive problem-solving to proactive operational management. Predictive analytics enables businesses to anticipate future events, optimize resources, and prevent costly disruptions, securing a significant competitive edge.' },
        { title: 'Generative AI as a Creative Catalyst', content: 'Generative AI is democratizing content creation and accelerating creative cycles. It empowers companies to experiment more, localize content efficiently, and produce a higher volume of personalized assets, redefining creative workflows.' }
    ],
    everydayAi: [
        { title: 'Brainstorming Buddy', content: 'Stuck on a problem? Use a chatbot to explore different angles. Ask it to "act as a marketing expert" or "think like a contrarian" to get diverse perspectives on your ideas.' },
        { title: 'Personalized Learning Tutor', content: 'Want to learn a new skill? Ask an AI to create a personalized learning plan. For example, "Create a 7-day plan for a beginner to learn Python, including daily topics and simple exercises."' },
        { title: 'Travel Itinerary Planner', content: 'Planning a trip? Give an AI your destination, dates, and interests (e.g., "5-day trip to Tokyo, interested in food, history, and anime"). It can generate a day-by-day itinerary with suggestions.' },
        { title: 'Email & Message Assistant', content: 'Struggling to find the right tone? Paste your draft and ask the AI to "make this email sound more professional" or "make this text message more friendly and casual."' },
        { title: 'Code Debugger', content: 'If you code, you can paste a snippet of non-working code and ask the AI to "find the bug in this Python code" or "explain what this JavaScript function does."' },
        { title: 'Summarize Anything', content: 'Have a long article or document to read? Copy the text (or provide a link) and ask the AI to "summarize this article into five key bullet points" to save time.' },
        { title: 'Creative Writing Partner', content: 'Suffering from writer\'s block? Give the AI a starting sentence or a basic plot point and ask it to "continue this story" or "suggest three different plot twists from here."' },
        { title: 'Fitness and Meal Planner', content: 'Ask the AI to create a custom workout routine or weekly meal plan based on your goals, dietary restrictions, and available equipment. For example, "Create a 3-day/week workout plan for building muscle with just dumbbells."' }
    ],
    quotes: [
        { text: "AI is a tool. The choice about how it gets deployed is ours.", author: "Oren Etzioni, CEO of AI2" },
        { text: "The real risk with AI isn't malice, but competence. A superintelligent AI will be extremely good at accomplishing its goals, and if those goals aren't aligned with ours, we have a problem.", author: "Stephen Hawking" },
        { text: "Think of AI as a mirror that reflects our own values and biases. The challenge is to build mirrors that show us a better version of ourselves.", author: "Dr. Fei-Fei Li, Stanford Professor" },
        { text: "I use ChatGPT to help me brainstorm and draft emails. It saves me hours each week and helps me sound more articulate.", author: "Sarah L., Marketing Manager" },
        { text: "AI will not replace you. A person using AI will replace you.", author: "Widely attributed to various sources" },
        { text: "Learning to code was daunting, but using an AI assistant to explain concepts and debug my code has been a game-changer for me.", author: "David C., Student" },
        { text: "Instead of worrying about what AI can do, let's focus on what it can do for us.", author: "Sundar Pichai, CEO of Google" },
        { text: "The best way to predict the future is to invent it. AI gives us a new set of tools to do just that.", author: "Alan Kay, Computer Scientist" }
    ],
    llmExplanation: {
        analogy: {
            title: 'The Story of the Super-Chef: How AI "Thinks"',
            paragraphs: [
                "Imagine a chef, but not just any chef – a Super-Chef. This chef has never actually eaten a meal, never tasted a flavor, and doesn't understand \"delicious\" in the way we do. Yet, this Super-Chef can create the most incredible, perfectly tailored meals for anyone, every single time. How?",
                "This Super-Chef spent their entire life in the world's largest kitchen, observing billions and billions of cooking sessions. They watched every ingredient being chopped, every pan sizzling, every dish being plated. They didn't memorize specific recipes for every dish, but they learned something far more powerful: the patterns of cooking.",
                "Crucially, the Super-Chef also developed an amazing sense of \"contextual awareness.\" If someone asks for \"bank\" ingredients, the chef knows to pick from flour, eggs, and sugar if the last ingredient was \"bakery,\" but if the last ingredient was \"river,\" they'd be thinking of water, fish, and sand! They pay attention to all the surrounding ingredients to understand the true \"flavor\" of the request.",
                "Now, when you, the customer, walk into the Super-Chef's kitchen and say, \"I want something quick and healthy for lunch, maybe with chicken,\" the chef doesn't \"think\" about chicken in the way you do. Instead, their brain, which is a \"Statistical Pattern-Matching Machine,\" instantly scans all the billions of cooking patterns it has learned. It figures out the most probable next ingredients that fit \"quick,\" \"healthy,\" \"lunch,\" and \"chicken.\" It then starts to \"cook\" your meal, ingredient by ingredient, alwayspicking the most statistically probable next ingredient until the dish is complete.",
                "This Super-Chef, who doesn't truly \"taste\" or \"understand\" but perfectly processes patterns, is your Large Language Model."
            ],
            points: [
                "They learned that flour and water often lead to dough.",
                "They learned that salt usually follows pepper, but not always.",
                "They learned that if someone uses garlic, onion, and tomato, they are highly likely to add basil next for an Italian dish.",
                "They learned that if someone asks for \"breakfast,\" eggs and bacon are very common next ingredients."
            ]
        },
        details: {
            title: 'Large Language Models (LLMs): The Finer Details',
            intro: "Large Language Models (LLMs) are the engines behind the incredibly intelligent AI experiences we interact with daily, like chatbots, content generators, and virtual assistants. They are a type of artificial intelligence designed to understand, generate, and manipulate human language. Here’s a closer look at their core components and how they operate:",
            components: [
                {
                    title: "1. Tokenization: The AI's Alphabet",
                    content: "Before an LLM can process any text, it first breaks down sentences into smaller units called tokens. A token isn't always a full word; it can be a common word, part of a word (like \"un-\" or \"-ing\"), a punctuation mark, or even numbers. This helps the model handle new or complex words and ensures efficient processing.",
                    example: "The phrase \"unbelievable!\" might be broken into tokens like [\"un\", \"believe\", \"able\", \"!\"]."
                },
                {
                    title: "2. Embeddings: Giving Words Meaning Through Numbers",
                    content: "Each token is then converted into a numerical representation called an embedding (or vector). Imagine this as a unique list of numbers for every token in the model's vocabulary. These embeddings are not random; they are learned during the model's extensive training process. The Magic of Embeddings: Words with similar meanings or that frequently appear in similar contexts will have embeddings (numerical lists) that are \"close\" to each other in a multi-dimensional space. For instance, the embedding for \"king\" will be numerically closer to \"queen\" than to \"bicycle,\" reflecting their semantic relationship. This is how the AI begins to \"understand\" the meaning of words.",
                },
                {
                    title: "3. The Transformer Architecture: The Brain's Connections",
                    content: "Modern LLMs, including Google's Gemini and OpenAI's GPT series, are built upon a powerful neural network design called the Transformer architecture. The key innovation within the Transformer is the attention mechanism, particularly \"self-attention\".",
                    pointsTitle: "Attention in Action:",
                    points: [
                        "Understand Context: Resolve ambiguities (like the two meanings of \"bank\").",
                        "Connect Distant Ideas: Link a pronoun (\"it\") to the noun it refers to, even if they are far apart in a long text.",
                        "Process Information in Parallel: Unlike older models, Transformers can process all words in a sequence simultaneously, making them incredibly fast for huge datasets."
                    ],
                    subContent: "When the LLM processes a sentence, for every word, it calculates how much \"attention\" it should pay to every other word in the sentence. For example, in \"The bank is near the river,\" when processing the first \"bank,\" the attention mechanism will heavily weight the word \"river\" as a strong clue to the meaning of \"bank\" in that context. This allows the model to:"
                },
                {
                    title: "4. Pre-training: Learning from the Internet's Wisdom",
                    content: "LLMs are \"pre-trained\" on colossal amounts of text data – literally trillions of words from books, articles, websites, conversations, and more. During this phase, the primary task is simple: predict the next token in a sequence. The Learning Loop: The model constantly guesses the next word, and if it's wrong, its internal parameters (including the values in the embeddings and the attention mechanism's weights) are subtly adjusted to reduce the error. Through this iterative process, the model learns the statistical patterns of human language, encompassing grammar, facts, common phrases, writing styles, and even subtle nuances of meaning.",
                },
                {
                    title: "5. Generation: The Word-by-Word Symphony",
                    content: "When you give an LLM a prompt, it's like setting the stage for its learned performance:",
                    points: [
                        "Contextual Understanding: Your prompt is tokenized, embedded, and processed by the attention mechanisms to form a rich, contextual understanding of your request.",
                        "Probabilistic Prediction: The model then calculates the probability of every possible next token that could logically follow your input, based on its vast learned patterns.",
                        "Sampling Strategy (Your Control): This is where settings like Temperature, Top P, and Top K come in. These settings influence which token is finally \"sampled\" and chosen.",
                        "Iterative Process: The chosen token is added to the sequence, and the entire process repeats. The model continuously predicts the next token until it generates a special \"end-of-sequence\" token or reaches a predefined maximum length."
                    ],
                },
                {
                    title: "6. Multimodality and Tool Use: Beyond Just Text",
                    content: "Modern LLMs like Gemini are often multimodal, meaning they are trained on and can process different types of data simultaneously (text, images, audio, video). This allows them to understand different inputs and generate diverse outputs. In essence, LLMs are not sentient beings, but incredibly sophisticated statistical pattern-matching machines. They have learned the intricate fabric of human language and information from immense datasets, enabling them to generate responses that often feel remarkably intelligent and human-like.",
                }
            ]
        }
    }
};

export const fullLLMExplanationText = [
  aiData.llmExplanation.analogy.title,
  ...aiData.llmExplanation.analogy.paragraphs,
  ...aiData.llmExplanation.analogy.points,
  aiData.llmExplanation.details.title,
  aiData.llmExplanation.details.intro,
  ...aiData.llmExplanation.details.components.flatMap(c => [
    c.title,
    c.content,
    c.example,
    c.subContent,
    c.pointsTitle,
    ...(c.points || [])
  ])
].filter(Boolean).join('\n\n');
