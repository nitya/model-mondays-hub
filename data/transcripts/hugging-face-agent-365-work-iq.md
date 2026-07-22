# Transcript: Build AI with Hugging Face Models, Build Enterprise Agents With Agent 365 & Work IQ

Source: https://www.youtube.com/watch?v=Kd6EPBfvDo4

---

_Auto-generated captions, scraped via yt-dlp timed-text fallback and lightly de-duplicated. Minor transcription errors may be present._

**00:10** — Hey everyone. Thank you for joining us

**00:12** — for the next session of Model Mondays.

**00:14** — My name is Anna. I'll be your producer

**00:16** — for this session.

**00:18** — I'm an event planner for Reactor joining

**00:20** — you from Redmond, Washington.

**00:22** — Before we start, I do have some quick housekeeping.

**00:25** — Please take a moment to read our code of conduct.

**00:29** — We seek to provide a respectful

**00:31** — environment for both our audience and presenters.

**00:35** — While we absolutely encourage engagement

**00:37** — in the chat, we ask that you please be

**00:39** — mindful of your commentary, remain

**00:42** — professional and on topic.

**00:43** — Keep an eye on that chat. We'll be

**00:45** — dropping helpful links and checking for

**00:47** — questions for our presenters and

**00:50** — moderators to answer.

**00:52** — Our session is being recorded. It will

**00:54** — be available to view on demand right

**00:56** — here on the Reactor channel.

**00:58** — With that, I'd love to turn it over to

**01:00** — our host for today. Thank you so much

**01:02** — for joining.

**01:05** — Hi everybody. Welcome to Model Mondays.

**01:07** — Uh my name is Gustavo Cordido.

**01:11** — I am a cloud advocate here at Microsoft

**01:13** — and I specialize working with AI. So,

**01:15** — being able to talk about models is one

**01:17** — of the things that I do for a living.

**01:19** — So, it's very very exciting to be here

**01:22** — today. Hopefully, you get to uh

**01:24** — experience and have a nice uh

**01:26** — day with us today here. Uh I'm going to

**01:29** — be joined by two very wonderful people.

**01:31** — Uh I'm going to be joined by Jeff Pudia

**01:33** — and Srikumar Nair. Uh

**01:35** — first of all, we'll be working with with

**01:37** — Jeff who's the VP of product at Hugging

**01:39** — Face and will be showing us some of the

**01:41** — new things that we come up uh they have

**01:44** — coming up on Hugging Face. Hi Jeff. How

**01:45** — are you?

**01:47** — Oh, doing great. Thanks. Thanks for

**01:48** — having me.

**01:50** — Of course. No, it's awesome to have you

**01:53** — here. Uh we'll be going over some of the

**01:54** — questions in the chat later, but for

**01:56** — now, I'd love to know what you do at

**01:57** — Hugging Face. What's your what's your

**01:59** — role like? &gt;&gt; [gasps]

**02:01** — &gt;&gt; Uh I'm a on the product team and

**02:03** — specifically, I focus on our commercial

**02:06** — activities like how we enable companies

**02:08** — and enterprises to build their own AI

**02:11** — using open models in Hugging Face.

**02:14** — Awesome. Awesome. And what makes you the

**02:16** — most excited for open models in general

**02:18** — at the moment?

**02:21** — Well, I think uh open models are what

**02:25** — enable companies to really take control

**02:27** — over their own AI

**02:30** — and build it and host it themselves and

**02:34** — customize it um and be responsible for

**02:36** — it. So, for me like open models is

**02:39** — what's going to enable all companies to

**02:42** — really build, take control of their own AI.

**02:45** — Awesome. Yeah, and I think that's one of

**02:46** — the one one of the goals that we're

**02:49** — trying to aim with uh with Foundry as

**02:50** — well is just having people being able to

**02:54** — bring their models and so on. Um but

**02:55** — talking about recent things, did you did

**02:58** — you attend the NVIDIA GTC this year?

**03:00** — &gt;&gt; Yes. Yes. Yes, I was there. So many

**03:05** — amazing uh announcements. Um yeah.

**03:06** — Anything in particular that you remember

**03:09** — that kind of stood out for you?

**03:10** — Well, I think

**03:12** — uh Jensen's keynote was really really

**03:15** — inspiring and I remember like a year ago

**03:17** — listening to um

**03:19** — everything he was saying about agents

**03:22** — and by then, it seems

**03:25** — um really ambitious and it seemed

**03:27** — far-fetched, but today everything that

**03:30** — he had said actually came to be true. Uh and

**03:34** — so, I was really excited uh to see uh

**03:37** — Nemo Claw and how

**03:40** — NVIDIA invested in making open claw

**03:43** — something that is more secure. Um we're

**03:45** — very much in this exploration phase

**03:47** — around agents. I know you're going to be

**03:50** — spending some time about this uh later

**03:52** — during this show. Uh so, I'm excited to

**03:54** — hear about that. Like how do you take

**03:57** — full advantage of these new capabilities

**03:59** — without compromising like your data,

**04:00** — your security? I think that's the question

**04:04** — uh that uh we're asking today.

**04:06** — Yeah, and and it's funny that you

**04:08** — mentioned that things that seem not to

**04:11** — be possible, even realistic maybe a year

**04:13** — ago have quickly

**04:15** — kind of changed our mind in that that's

**04:17** — that because it's just we're living in a

**04:19** — going so fast. It's so difficult to even

**04:21** — keep up with over all the things that

**04:24** — are coming out. So, so yeah, I I I feel

**04:27** — you on that on that end. Um

**04:28** — but yeah, do you want to do you want to

**04:30** — give us a quick

**04:31** — uh quick tease of what you will be

**04:33** — showing and then we'll move on into the

**04:35** — video that you prepared for us?

**04:37** — Yeah, I mean, I'm going to get into the

**04:39** — nitty-gritty of things.

**04:42** — Um but what does it mean for enterprises

**04:45** — to build their own AI? Uh we've been

**04:48** — collaborating with Microsoft to bring

**04:51** — the best open models directly within

**04:53** — Microsoft Foundry.

**04:55** — And I'm going to I'm going to show you

**04:58** — how you can uh take advantage of that

**05:00** — starting in Foundry, starting in Hugging

**05:03** — Face where we have all these uh open models.

**05:08** — Um and I'm also going to talk about uh

**05:12** — three new exciting open models that are

**05:15** — available today in Microsoft Foundry. Um

**05:17** — one of the things that we put a lot of

**05:20** — effort in working day-to-day uh with the

**05:23** — teams uh at Microsoft Foundries to make

**05:25** — sure that whenever there's a new and

**05:27** — exciting model that comes on,

**05:29** — then it becomes available

**05:31** — uh within Microsoft Foundry. And you

**05:35** — asked me about GTC. Uh Jensen talked

**05:39** — about their new open reasoning LLM uh

**05:42** — Neumotron 3 Super. It's available today

**05:44** — on Hugging Face where it's really

**05:47** — popular and very useful specifically for

**05:49** — agentic use cases we were just talking about.

**05:54** — And it is available today in Microsoft Foundry

**05:57** — uh via the Hugging Face collection. So,

**05:59** — yeah, please stay tuned on that. And for

**06:01** — people uh watching,

**06:03** — um please like comment on like which

**06:06** — models you're excited about that you see

**06:08** — today in Microsoft Foundry from Hugging Face,

**06:11** — uh the ones that you don't see yet that

**06:13** — you want us to add. We're constantly monitoring

**06:17** — uh what uh customers are requesting so

**06:20** — that we can always add

**06:22** — uh new important models to the Hugging

**06:24** — Face collection on Microsoft Foundry.

**06:26** — Awesome. And yeah, you stole that from

**06:27** — me. I was actually going to ask, "Hey,

**06:28** — what what's the models that you're

**06:30** — excited about?" So, yeah,

**06:32** — good one there. All right. Awesome. So,

**06:34** — I guess we'll move on into showing your

**06:36** — demo, seeing what you got for us. I'm

**06:37** — very excited for it and then I'll come

**06:39** — up with some questions after and hope

**06:40** — I'm sure the chat would also have some

**06:41** — of them for you.

**06:52** — I think we're missing sound on that on

**06:55** — that video. Perfect.

**06:56** — Can you restart that video for us,

**07:04** — Oh, you've muted the

**07:05** — the video again. Can you unmute it for us?

**07:09** — Perfect.

**07:15** — Well, let's get started.

**07:17** — First, I want to give you a brief

**07:19** — overview of what Hugging Face is.

**07:21** — Hugging Face is the leading open

**07:25** — platform for AI builders. It is where

**07:28** — open models are. Um it is how you can

**07:31** — use them with our open source libraries.

**07:33** — And it is how you can collaborate with

**07:37** — your team to build your own AI on the

**07:38** — Hugging Face Hub.

**07:40** — And the Hugging Face Hub is where all

**07:42** — these resources are.

**07:44** — Um actually, I don't think we've shared

**07:46** — this publicly yet, but we just crossed

**07:49** — over 5 million open repositories on

**07:51** — Hugging Face.

**07:53** — These open repositories, they're models,

**07:56** — they're data sets, they're applications.

**07:57** — Uh so, let's take a look at models first.

**08:02** — There are over 2.7 million open models

**08:05** — available today on Hugging Face.

**08:07** — And of course, you know about LLMs, but

**08:08** — these are models for any kind of

**08:10** — modality you can think of.

**08:14** — Uh these includes audio, speech. It

**08:17** — includes uh image and video. It includes

**08:19** — 3D and chemistry.

**08:21** — And they're all free to use and they're

**08:24** — all publicly accessible.

**08:28** — Next, we have data sets.

**08:30** — Data sets are really important because

**08:32** — this is how you can fine-tune, how you

**08:36** — can customize pre-trained models and

**08:38** — really make them your own. And it's

**08:40** — super easy for you to create and upload

**08:43** — and manage your own data sets on Hugging Face.

**08:48** — And last, there are spaces. Spaces is

**08:51** — what we call AI applications. They're

**08:53** — hosted on Hugging Face and a great way

**08:55** — for you to demo

**08:58** — um what's the latest and greatest models

**09:02** — uh do directly by interacting with the application.

**09:07** — But there is a new repository type and

**09:09** — that just came out and it's called

**09:12** — storage buckets.

**09:14** — And what storage buckets is is Hugging

**09:19** — Face's vision for what AI native storage

**09:20** — should look like.

**09:22** — It's fast.

**09:24** — It transfers only the bits that you need

**09:27** — uh leveraging deduplication.

**09:30** — And it's a great way for research teams

**09:33** — to scale scale their training uh while

**09:35** — keeping their cost down and keeping

**09:37** — their data close to uh where they're

**09:39** — processing it.

**09:41** — Also, a great solution for companies who

**09:44** — are uh deploying their own agents and

**09:47** — needs um a great storage solution for

**09:49** — all the artifacts. So, that's storage

**09:51** — buckets and that's brand new.

**09:53** — I mentioned collaborations.

**09:54** — Collaborations happens through

**09:58** — organizations. They're free to create

**09:59** — um so that you can collaborate on

**10:02** — private models and datasets and

**10:04** — applications. It's something that's

**10:07** — lesser known to the community, but there

**10:09** — are about as many private models,

**10:12** — datasets, and spaces

**10:14** — as there are public ones on Hugging

**10:16** — Face. And organizations is how you can

**10:20** — share those within companies. So, over

**10:24** — 300,000 organizations on Hugging Face,

**10:26** — when they need to add security to

**10:29** — control who has access to what and much more,

**10:32** — we have Hugging Face Enterprise. So,

**10:34** — that in a nutshell

**10:37** — is Hugging Face.

**10:39** — Next, I want to show you how you can use

**10:42** — Hugging Face models directly within your

**10:44** — own Azure account.

**10:46** — Thanks for strategic collaboration with Microsoft.

**10:50** — And it was less than a year ago that

**10:53** — Satya Nadella announced our expanded

**10:56** — collaboration at Microsoft Build. So,

**10:59** — that together we can make it super easy

**11:02** — for Microsoft customers to build their

**11:06** — own AI with open models. And we are

**11:12** — First, I want to point you to our

**11:15** — dedicated documentation. It shows you how

**11:19** — you can deploy Hugging Face open models

**11:21** — in Microsoft Foundry

**11:24** — onto dedicated hardware to create

**11:27** — endpoints for your applications. And

**11:30** — here in the documentation, we have some

**11:33** — great end-to-end examples that shows you

**11:36** — how you can build agents, how you can

**11:39** — build AI applications that use models

**11:43** — from LLMs to vision models to audio

**11:46** — models and more.

**11:49** — So, now let's go take a look at

**11:51** — Microsoft Foundry. This is the new

**11:54** — Foundry. I hope you're familiar with it

**11:57** — now. And within it, we're going to go to

**12:00** — the models page.

**12:02** — In the models page, you will find models

**12:04** — from all kinds of different providers,

**12:07** — closed models, open models,

**12:10** — models available for serverless

**12:13** — inference where you pay by the token or

**12:15** — with a provision throughput units.

**12:18** — And and open models that you can deploy

**12:20** — in your own dedicated hardware for

**12:22** — production, which is the case for the

**12:24** — Hugging Face collection. So,

**12:27** — Hugging Face models are in there like

**12:29** — this Qwen over here, but to find all of

**12:31** — the Hugging Face models, you head to

**12:34** — collections and open the Hugging Face collection.

**12:38** — This is where you will find over 10,000

**12:41** — models from Hugging Face. They're not

**12:43** — just any models. They're our models that

**12:46** — we have curated so that they satisfy all

**12:48** — of our security and compliance

**12:52** — requirements. Things like we need the

**12:54** — model weights to be stored in the safe

**12:56** — tensors format.

**12:59** — We need the license to be appropriate.

**13:02** — We need the model to have passed all of

**13:04** — the security scanning that Hugging Face does.

**13:08** — So, we present only a curated set of models

**13:11** — that we know

**13:14** — to be safe to the best we can.

**13:17** — So, here you go. This is the Hugging

**13:19** — Face collection. You will find some of

**13:22** — the greatest and latest models, of

**13:25** — course the Qwen models,

**13:28** — GLM, and many, many more.

**13:32** — Let's take a look at this Qwen 3.5,

**13:34** — which is a really, really powerful,

**13:37** — dense, small LLM that's optimized for reasoning.

**13:41** — If I open this model, you can see that I

**13:44** — have information about how

**13:47** — to use it once it's deployed, and I can

**13:50** — take a look at the license of the model

**13:51** — before I deploy it.

**13:54** — To deploy the model, I click use this

**13:57** — model, select a project, and now I'm

**14:02** — going to be selecting an instance.

**14:04** — And basically everything is ready to go.

**14:06** — The whole software stack is already

**14:10** — optimized, so I can just click deploy

**14:12** — and get

**14:14** — my application going.

**14:17** — So, that's the Hugging Face collection

**14:21** — within Microsoft Foundry.

**14:23** — Okay, now that I showed you how you can

**14:25** — find a Hugging Face collection in

**14:27** — Microsoft Foundry,

**14:28** — I want to show you how you can get

**14:32** — started deploying models on Foundry

**14:34** — starting from the Hugging Face Hub. So,

**14:36** — let's go back to the Hugging Face Hub.

**14:38** — Again, this is the home for open models,

**14:41** — over 2 and 1/2 million open models

**14:43** — available here. And for this example,

**14:47** — let's focus on the one of the latest

**14:50** — models from Qwen. It's a 27 billion

**14:54** — parameter dense reasoning LLM great for

**14:56** — agentic use cases.

**14:58** — This is the model card for the model.

**14:59** — So, this is where you can learn

**15:01** — everything there is to learn about the model.

**15:05** — And like for a lot of models on Hugging

**15:08** — Face, you can try them out directly from

**15:10** — the model page

**15:12** — by typing a simple prompt. A simple

**15:15** — prompt. So, let's say explain like I'm five

**15:23** — So, this model is a reasoning model, so

**15:25** — it's going to start by reasoning through

**15:27** — understanding my question, breaking it

**15:30** — down into parts, and eventually it's

**15:32** — going to provide the answer.

**15:35** — My request has been sent through Hugging

**15:38** — Face inference providers.

**15:41** — And in this particular case, Novita is

**15:43** — going to provide the answer.

**15:45** — And here's our answer.

**15:47** — So, imagine you have a super smart new

**15:49** — helper robot.

**15:52** — Okay, let's skip to the conclusion.

**15:56** — In short, agent robot that acts, not

**15:59** — just talks, a harness, the rules and

**16:01** — connections that keep the robot safe and

**16:02** — on task.

**16:05** — Yeah, I guess that would make sense if I &gt;&gt; [laughter]

**16:07** — &gt;&gt; was five.

**16:09** — Okay, but now what do we want to do? We

**16:12** — want to deploy this model within our own

**16:15** — Azure tenancy so that we can use it

**16:18** — securely within our own environment. And

**16:20** — how we going to do that? First, we click

**16:24** — on deploy, and within deploy, we select

**16:26** — Microsoft Foundry.

**16:29** — And right from here, I can click on go

**16:32** — to the model on Microsoft Foundry. It's

**16:34** — a one-click experience that takes you

**16:37** — directly where you want to be within

**16:39** — Microsoft Foundry. And all I have to do,

**16:43** — just like before, select a project,

**16:51** — Select the instance and go.

**16:55** — So, that's how you can deploy models

**16:58** — directly from the Hugging Face Hub.

**17:00** — You can use inference providers to

**17:03** — understand how the model works, how it

**17:05** — would work for your use case. And when

**17:07** — you want to go to production within your

**17:10** — own Azure account, you click on deploy

**17:14** — on Microsoft Foundry. And if you already

**17:17** — have the Azure AI toolkit installed and

**17:19** — you want to use your terminal or you

**17:22** — want to use code to do the same thing,

**17:25** — we provide you with a code snippet that

**17:27** — you can import here in your notebook,

**17:30** — here in your terminal to do the same

**17:35** — All right.

**17:38** — Last, I want to give the spotlight to

**17:42** — three models which we recently onboarded

**17:44** — within the Hugging Face collection on

**17:47** — Microsoft Foundry. These are three very

**17:49** — exciting new models for you to build AI

**17:51** — applications with.

**17:56** — The first one is Nemotron 3 Super from

**18:01** — Nvidia. The second is Granite 4.0 Speech

**18:02** — from IBM.

**18:06** — And the third one is Sarvam 105B

**18:10** — LLM from Sarvam AI. All right, let's get started.

**18:16** — Why did I choose Nemotron 3 Super? Well,

**18:19** — agentic applications starting with open

**18:22** — claw and our Nemotron claw are super,

**18:25** — super popular right now. And one of the

**18:28** — main use cases for the reasoning LLMs

**18:30** — like the one we just saw.

**18:33** — And what's very exciting with Nemotron 3

**18:35** — Super, which just was released by

**18:37** — Nvidia, is that they are particularly

**18:40** — good at these agentic use cases. In

**18:45** — fact, if you saw Jensen's keynote at GTC

**18:49** — just last week, you saw that this LLM

**18:52** — actually scores amongst the top rated,

**18:55** — right on par with the best models

**18:58** — available from open AI and Anthropic.

**19:02** — And it's an open model that you can use

**19:04** — and modify yourself. All right, so let's

**19:06** — take a look.

**19:09** — This is Nvidia's organization page on

**19:12** — Hugging Face. You can find it on huggingface.co/nvidia.

**19:18** — It has an incredible amount of great

**19:21** — models for every kind of modality and

**19:24** — vertical. Nvidia is one of the most

**19:26** — active organizations on the Hugging Face

**19:30** — Hub releasing every day new models,

**19:32** — datasets, and applications. So, you

**19:35** — should definitely follow

**19:39** — Nvidia like over 50,000 of of you. But

**19:43** — let's focus on the Nemotron 3 Super. You

**19:46** — can find it within the

**19:49** — Nvidia Nemotron V3 collection.

**19:51** — There are a variety of different model

**19:53** — checkpoints. We're going to be focusing

**19:56** — on the super variations. There are

**20:00** — smaller models like the nano series.

**20:02** — And the super models come

**20:05** — within the same size in three different

**20:08** — checkpoints depending on which GPU you

**20:10** — want to use them on.

**20:13** — I'm going to pick the FP8 variant

**20:15** — because this is a variant that is

**20:17** — optimized for Hopper

**20:21** — GPU instances. All right. We're looking

**20:24** — at the model card. You can see the

**20:27** — benchmark results for NeMo Tron 3 super

**20:30** — and how it compares with some other models.

**20:34** — And let me show you a few things. Let me

**20:36** — pick a couple things why this model is

**20:38** — super exciting.

**20:42** — So one is that it supports a context

**20:44** — window, a context length

**20:48** — up to 1 million tokens.

**20:51** — And for agentic use cases, the context

**20:54** — window is often the bottleneck as to how

**20:56** — much reasoning it it can do, how much

**20:59** — context you can provide the agent to

**21:01** — perform actions, and how many tools and

**21:04** — how much you can use tools within the

**21:07** — agentic loop. So having a 1 million

**21:10** — context length is super super important.

**21:13** — It supports multiple languages. It's a

**21:17** — hybrid architecture that's really performant.

**21:20** — And it has a reasoning mode which you

**21:22** — can toggle on and off depending whether

**21:25** — you want to get an off-the-bat answer,

**21:27** — the model to answer right away, or if

**21:29** — you want it to go through reasoning

**21:32** — steps. So very very exciting new model

**21:35** — and particularly important for agentic

**21:38** — use cases. So now

**21:39** — we're going to deploy to Microsoft

**21:42** — Foundry. Again, I clicked on deploy

**21:44** — and now I see that I can one click

**21:48** — straight into Microsoft Foundry to

**21:50** — deploy the model.

**21:52** — I click on use this model. I select my

**21:54** — project. I'm going to pick an instance.

**21:58** — Again, this is the FP8 variant. So I'm

**22:02** — going to pick Hopper GPU and quota

**22:05** — provided, I can just click deploy.

**22:10** — Amazing. Okay. So that was NeMo Tron 3

**22:12** — super from Nvidia.

**22:15** — Next, I want to change modality and I

**22:17** — want to talk about

**22:20** — speech applications. If there are many

**22:22** — of you who are building applications

**22:23** — where you use recordings from

**22:26** — conversations, videos,

**22:29** — and the like. Audio models have been a

**22:33** — very very active category and one of the

**22:35** — latest models

**22:37** — that are that is super interesting for

**22:40** — this type of applications is the Granite

**22:45** — 4.0 speech model. It's a 1 billion

**22:47** — parameter model, quite small for its

**22:50** — category. And for its small size, it

**22:54** — really punches way above its weight,

**22:57** — accomplishes state-of-the-art result

**23:00** — for its category of like sub 8 billion

**23:01** — parameter model,

**23:04** — roughly the same performance as models

**23:06** — twice its size.

**23:08** — So a very very exciting model

**23:12** — contributed by IBM. IBM with the Granite

**23:14** — series has been contributing some

**23:16** — amazing open models with fully

**23:20** — permissive license. This one is Apache

**23:23** — 2.0 and they're really excellent for

**23:25** — enterprise use cases.

**23:26** — In particular,

**23:29** — one of the my favorite features

**23:32** — of this model is that you can give it some

**23:37** — some terms that you want

**23:40** — the model to recognize and

**23:42** — give a positive bias to when it's

**23:44** — building the transcript. So this is

**23:46** — great for you as you have like product

**23:49** — names, your brand language, etc. You can

**23:51** — give that to the model so that it can

**23:54** — recognize those terms as it's building

**23:56** — the transcript.

**23:59** — Another very important feature for

**24:03** — ASR is the ability to transcribe in many

**24:07** — different languages which Granite does.

**24:09** — And then another very

**24:12** — cool feature is that the model is able

**24:15** — to not just transcribe but also

**24:17** — translate in the same turn within the

**24:19** — same model. So you can have

**24:22** — transcription that will translate

**24:31** — Without requiring an additional model.

**24:34** — So that's Granite 4.0. It's a 1 billion

**24:36** — parameter model. That means that it can

**24:39** — run on very small compute surfaces. Actually,

**24:44** — you can run it within the browser. And

**24:48** — this is a demo for IBM Granite where the

**24:52** — model is actually running within here my

**24:54** — Chrome browser. It will not call the

**24:57** — cloud to record something. So let's

**24:59** — record something. Est-ce que vous

**25:00** — connaissez Microsoft Foundry? Have you

**25:03** — heard about Microsoft Foundry?

**25:05** — All right, I just recorded this audio.

**25:06** — &gt;&gt; Playing it back. Now we're going to

**25:08** — transcribe it.

**25:10** — &gt;&gt; something. So let's record something.

**25:12** — Est-ce que vous connaissez Microsoft

**25:13** — Foundry? Have you heard about Microsoft Foundry?

**25:17** — And there you go. We got a transcript that

**25:21** — was transcribed in the browser in

**25:23** — real-time performance. It was about 6

**25:26** — seconds to transcribe. 6 seconds. It

**25:28** — added punctuation

**25:30** — and it's able to recognize when

**25:33** — different speakers are speaking.

**25:35** — All right. So let's go back to the model

**25:37** — and now we're going to do the usual

**25:40** — thing. We're going to deploy it to

**25:42** — Microsoft Foundry.

**25:44** — The model is available. I can just click

**25:46** — on it

**25:48** — and I'm landing right where I need to be

**25:51** — so that I can use this model

**25:53** — in my project.

**25:55** — Pick the right kind of instance. Here I

**25:58** — can choose a smaller one and click deploy.

**26:02** — And that creates an endpoint directly

**26:06** — within my Azure account.

**26:09** — All right. And last, the third model I

**26:12** — want to give a spotlight to is Sarvam 105B

**26:17** — from Sarvam AI. So we've seen many

**26:21** — communities around the world sort of

**26:24** — collaborate and unite around building

**26:28** — foundation models that are really

**26:31** — tailored and trained from their own

**26:33** — language and culture. So that's the

**26:36** — sovereign model. Sarvam AI is a great

**26:39** — example of this coming from India. There

**26:42** — are also similar efforts in other

**26:45** — countries like South Korea and like

**26:47** — Japan and so many more to build

**26:51** — foundation models that are created from

**26:54** — from a corpus of data in a native

**26:56** — language. And here

**26:58** — Indian language, Indian language, of

**27:00** — course you want to ask like which one?

**27:02** — There are so many. Well, that's one of

**27:04** — the main benefits of Sarvam 105B is that

**27:08** — it's trained to

**27:12** — to process Indian language in over 22

**27:15** — different languages. So it's really

**27:19** — built for Indian language. It's a

**27:22** — state-of-the-art mixture of experts

**27:25** — architecture LLM.

**27:27** — So you can build all of the great

**27:31** — agentic AI applications, all the great chatbots,

**27:36** — and other AI applications that are

**27:39** — natively, literally speaking your language

**27:44** — for your AI for your Indian customers.

**27:48** — So really great contribution. The model

**27:51** — is Apache 2.0 so fully open and

**27:53** — permissible. And like the other ones,

**27:56** — you can just click deploy to Microsoft

**27:59** — Foundry and in one click

**28:01** — land to your account where you can use

**28:04** — this model into your project, pick an

**28:07** — instance, and go.

**28:10** — All right. So those were the model

**28:13** — spotlights for this week. For most

**28:15** — weeks, we're going to try to surface

**28:19** — exciting new models that we onboard on

**28:22** — Microsoft Foundry so you can keep up to

**28:24** — date with

**28:27** — the best possible models for you to

**28:30** — build your own AI using the best open

**28:34** — models available directly in Microsoft

**28:42** — All right, awesome. All right.

**28:44** — Sweet. That's that was great. That was

**28:46** — so much so much good information,

**28:48** — honestly. I was

**28:50** — very very surprised with all the things

**28:53** — you shared. Thank you. I didn't mess

**28:55** — miss mess up one thing though.

**28:58** — The the Granite speech model, I said it

**29:01** — was transcribing in real time. Actually,

**29:03** — it's much much faster than that.

**29:06** — It can actually achieve like over 280

**29:10** — times real time, meaning that you could uh

**29:10** — uh transcribe

**29:15** — 3 hours in 1 minute potentially.

**29:18** — So it's it's actually super super fast.

**29:20** — Oh, I'm going to I'm going to use that

**29:22** — I was going to make it easier for for

**29:24** — summary of meetings, you know. &gt;&gt; [laughter]

**29:28** — &gt;&gt; I did want to highlight a couple of

**29:29** — things that I thought were super

**29:31** — interesting. I mean, the storage buckets

**29:32** — announcement was something that was I

**29:33** — was not familiar with. I'd never heard

**29:35** — of it before.

**29:38** — I think that's such a good idea. I mean,

**29:40** — I wanted to know like what kind of

**29:41** — inspired you all to think of it as a

**29:44** — solution and bring it out.

**29:45** — Well, thank you. Thank you very much.

**29:48** — Yeah, it is brand new

**29:50** — and it comes from our

**29:52** — realization that

**29:54** — AI teams

**29:56** — who are using Hugging Face day-to-day to

**29:58** — to build their own AI.

**30:01** — They have very specific sort of needs

**30:04** — with regards to storage and the way that

**30:07** — the current storage solutions

**30:10** — are set up is really not designed with

**30:12** — AI in mind.

**30:15** — And so we went out to build our own

**30:17** — basically and that's what storage

**30:18** — buckets is.

**30:22** — It takes advantage of these set xet

**30:27** — this set storage and duplication technology

**30:32** — that has been the whole rebuilding. We

**30:35** — re-architected the whole back end of

**30:37** — Hugging Face around it.

**30:40** — And this technology allows us to be very

**30:43** — very efficient in data transfer.

**30:46** — So only the bits that change will get

**30:50** — uploaded or downloaded as you train a

**30:54** — model and you create new checkpoints

**30:56** — and same thing with agentic systems.

**30:59** — Like agentic systems, not only do they

**31:03** — churn through so many tokens, something

**31:05** — that Jensen talked a lot about at the

**31:08** — GTC keynote. They also produce a lot of

**31:11** — data. And again, like the storage

**31:13** — systems, the data storage systems that

**31:17** — exist are not really thought for AI

**31:20** — workloads and storage buckets is a great

**31:23** — solution for that. Yeah. Agreed.

**31:28** — And I wanted to also bring out the fact

**31:30** — that you mentioned that all the models

**31:31** — that you have in Hugging Face are

**31:33** — curated by you to like meet security

**31:36** — compliance requirements. I think that's incredible.

**31:40** — And I want to use that as a segue to

**31:42** — answer to actually ask you one of the

**31:44** — questions that we saw in the chat.

**31:48** — It came from Namdio Dos I has a bunch of

**31:49** — numbers in it.

**31:52** — But Namdio, I'm going to call you that,

**31:54** — asked you deploy a model in Azure

**31:57** — Foundry, is that model exclusive to you

**31:58** — or do you share the model inference with

**32:00** — other people?

**32:02** — That's a great question.

**32:05** — And I mentioned when you go to Microsoft

**32:07** — Foundry, you see all these models and

**32:10** — some of those will be

**32:13** — deployable as serverless where you're

**32:14** — basically sharing the infrastructure

**32:16** — with everybody else who wants to use

**32:18** — that same model.

**32:21** — And some of them will be deployed on

**32:24** — dedicated infrastructure.

**32:27** — And everything that I talked about is

**32:29** — about deploying on dedicated

**32:31** — infrastructure. Meaning it's like

**32:33** — meaning you are creating a managed

**32:35** — endpoint where all the resources are

**32:39** — within your Azure tenant and managed by

**32:42** — Microsoft Foundry. So all the models in

**32:45** — the Hugging Face collection are models that

**32:48** — we make easy to deploy within your own

**32:51** — tenants where you dedicated an instance

**32:55** — be the GPU or CPU etc. for that model.

**32:57** — That model will be deployed in your

**32:59** — account and only you will be using that deployment.

**33:03** — Got it. Got it. I mean that that

**33:05** — basically makes it easier for people to

**33:07** — choose where to when to uh

**33:10** — when to deploy one of these models or

**33:12** — not and I think that's that's great.

**33:14** — Yeah, I think we have like a lot of

**33:16** — great solutions for people to try things

**33:20** — out on Hugging Face. But then when you

**33:22** — want to use a model for actual work, you

**33:24** — want to deploy it into production and I

**33:26** — think that's when you need to have

**33:28** — reliability, you need to have stability,

**33:30** — you need to have guaranteed sort of

**33:32** — service levels expectations and that's

**33:35** — where like doing a dedicated deployment

**33:37** — makes a lot of sense. That's why we have

**33:39** — this sort of two-step process where you

**33:41** — go on Hugging Face, you explore, you try

**33:43** — things, you prototype

**33:45** — and then when you need to put things

**33:47** — like close to your data etc., you go on

**33:49** — Microsoft Foundry and you create a

**33:51** — managed endpoint.

**33:53** — Exactly. And with Foundry, you can just

**33:54** — connect with anything that you have on

**33:55** — the cloud there. So it just makes it

**33:58** — easier as well to keep the security

**34:00** — compliance as well in there.

**34:01** — We also have another question coming

**34:04** — from Bernhard Merkel.

**34:06** — He asked that WebGPU means that the

**34:09** — model runs in the browser only using CPU

**34:10** — in the background. So it is kind of like

**34:13** — a lightweight and does not need a GPU, correct?

**34:16** — So yes, and no.

**34:20** — So WebGPU is a technology so that

**34:24** — you can actually use your local GPU

**34:27** — and make it used by the browser, right?

**34:30** — And that's enabled in Chrome.

**34:34** — And so in the demo of Granite Speech

**34:36** — where I where I hit record and we had

**34:38** — the transcription come,

**34:41** — that was actually run on my local GPU,

**34:46** — my MacBook by the Chrome browser. So no,

**34:49** — it's not CPU, it's GPU and yes, it's

**34:52** — running in the browser using your local

**34:53** — machine. So that's what makes it

**34:55** — exciting. I thought it was a great demo cuz

**34:58** — you know, Granite Speech is a 1 billion

**35:00** — parameter model.

**35:02** — So it can actually run really

**35:05** — efficiently on most machines and WebGPU

**35:07** — makes it possible to do that directly

**35:09** — within a web app.

**35:11** — Awesome. Thanks for answering that. We

**35:15** — have another question from Thiago Santra

**35:17** — on the chat who's who's asking, when you

**35:20** — use AI from Hugging Face, how do I

**35:22** — integrate it into my own AI service and

**35:25** — is it able to handle mass users?

**35:26** — Yeah, that's a that's a great question

**35:28** — and you know, earlier I talked about how

**35:31** — you can try things out on Hugging Face

**35:33** — and then if you want to scale to

**35:35** — production, a great way to do that is

**35:37** — using Microsoft Foundry.

**35:40** — So I think that's

**35:42** — the mental model

**35:45** — for integrating within your existing AI

**35:47** — services and how to scale. Basically, if

**35:51** — you create a managed endpoint

**35:54** — in Azure using Microsoft Foundry, you're

**35:57** — going to be able to scale

**35:59** — the the endpoint without having to

**36:03** — manage the infrastructure directly and

**36:06** — that's a great way to sort of keep

**36:09** — control of how much throughput you want

**36:11** — to be able to support within your applications.

**36:13** — applications. Awesome.

**36:15** — And at this kind of connects with what

**36:17** — you're you just [clears throat] talking

**36:19** — about about Foundry and deploying

**36:22** — Foundry from from Hugging Face.

**36:26** — Sad to be dash E7 asked

**36:28** — asked to

**36:30** — tough to to keep up with these usernames.

**36:34** — I have a question. All these models are

**36:37** — hosted in only Foundry platform or also

**36:39** — in Hugging Face as well?

**36:41** — So I guess there are two two ways to

**36:43** — answer that question. Like first, like

**36:45** — which models are we talking about, right?

**36:48** — So I showed that on Hugging Face on the

**36:52** — hub, there are over 2.7 million

**36:54** — public repositories for models.

**36:58** — And we sort of curate that down to the 11,000

**37:03** — models that we have onboarded in

**37:06** — Microsoft Foundry. And so we have a

**37:09** — bunch of criteria. It needs to be safe

**37:12** — way of storing the weights using safe tensors.

**37:15** — It needs to have like a compliant

**37:18** — license that enables commercial use.

**37:20** — There's a bunch of criteria. It needs to

**37:22** — have passed successfully all of the

**37:25** — security scanning that Hugging Face does

**37:26** — on the hub.

**37:28** — And so all the

**37:30** — all the models within the Hugging Face

**37:33** — collection in Microsoft Foundry are also

**37:36** — available within the Hugging Face hub.

**37:39** — And I think maybe another way of looking

**37:41** — at that question is about like where are

**37:44** — the model weights stored?

**37:46** — And the answer is that today the model

**37:49** — weights are stored on Hugging Face but

**37:51** — when Microsoft Foundry creates your

**37:54** — managed endpoint, it's going to

**37:57** — create, start and run a container that

**37:59** — is going to download the model weights

**38:02** — onto your own environment so that you

**38:05** — don't need to be querying Hugging Face

**38:08** — during at inference time.

**38:12** — Got it. Got it. And we're going to be

**38:14** — wrapping up now to move into our next

**38:16** — speaker. But before that, I do want to

**38:18** — highlight one mention something that I

**38:19** — think will be make bring some happiness

**38:21** — to your face as well is that we have a

**38:24** — message from Alexander Castro who says

**38:26** — &gt;&gt; Okay. science student and I'm so

**38:27** — interested in this. I love tinkering

**38:29** — with new models and features and I'm so

**38:31** — glad I found Hugging Face. Yay. That

**38:33** — brings a smile to my face. I'm assuming

**38:35** — it's even bigger for you.

**38:37** — Thanks, Alexander. Really appreciate it.

**38:39** — That is awesome. All right. Well, Jeff,

**38:41** — any closing any closing statements?

**38:42** — Anything you would like people to try

**38:45** — out or or you just go into into the hub

**38:47** — or something that you want people to

**38:50** — to have as a call to action today?

**38:52** — Well, call to action. I would say to

**38:55** — everyone that it's really important for

**38:58** — everybody to experiment with AI and open

**39:01** — models is the way for you to experiment

**39:04** — with AI so that you're not just a user

**39:08** — of AI, but you actually a builder of AI.

**39:09** — We're super happy to partner with

**39:12** — Microsoft to make that possible not just

**39:15** — on the Hugging Face platform, but also

**39:18** — directly within Microsoft Foundry. Soon

**39:20** — it's going to be a year since we

**39:23** — announced our expanded collaboration to

**39:25** — make that happen.

**39:26** — And so I'm super excited about

**39:28** — everything that's going to happen and

**39:31** — ship at the one-year anniversary

**39:33** — Microsoft Build which I think it's early

**39:36** — June in San Francisco. I hope I

**39:38** — I'll get to be together.

**39:40** — Awesome. Well, hope to see you there as

**39:42** — well, Jeff. Thank you so much for all

**39:43** — the time

**39:45** — and this has been amazing.

**39:48** — I really appreciated everything. And

**39:49** — like we like Jeff said, I mean, make

**39:50** — sure to check out Hugging Face, start

**39:52** — experimenting, and start checking out

**39:54** — what what you can do with these models.

**39:56** — Try deploying them. I'm sure you'll get

**39:58** — to learn a lot, so now we're going to be

**40:01** — moving on towards to our next speaker, Sukumar

**40:06** — from Oh, let me move into this.

**40:10** — Sukumar from the Agent 365 at Microsoft.

**40:12** — Uh welcome, Sukumar. How are you?

**40:14** — I am good, Gustavo. I am so excited to

**40:16** — be here, and wow, that was a

**40:19** — mind-blowing session from Jeff. So

**40:21** — excited, and I'm going to talk about

**40:23** — some of the tools that will make you all

**40:26** — be builders, not just users of AI. So

**40:27** — let's see what we got.

**40:30** — Awesome. Awesome. So how about you

**40:32** — you just give us a little rundown of

**40:33** — what your job is like? What do you do

**40:35** — for a living?

**40:37** — Uh great question. So yeah, I'm a

**40:41** — principal GPM with Microsoft Agent 365.

**40:43** — Uh Agent 365 is the control plane for

**40:45** — all the agents that are running in your

**40:47** — organization. So if you're an IT admin,

**40:50** — CISO, security guy, this is your tool to

**40:53** — go to to understand what agents are in

**40:55** — your system. At the same time, I also

**40:58** — work on the agentic tools like Microsoft uh

**41:02** — platform for Copilot, which is basically

**41:04** — also the place where we are enabling

**41:07** — some of the MCP uh tools, which are

**41:09** — basically the agentic tools for

**41:11** — connecting to Work IQ. So you'll be

**41:14** — seeing a bit of a demo of how we are

**41:16** — able to connect agents to the Work IQ

**41:18** — and thereby make those agents more

**41:20** — powerful. So if you are started building

**41:22** — agents, you're going to love this session.

**41:26** — Awesome. And I asked the same question

**41:27** — to Jeff earlier, but I would love to ask

**41:30** — you about about this as well. What What

**41:31** — is something that you think it makes you

**41:34** — excited about open models in general and

**41:37** — being able to bring them into Agent 365

**41:39** — and so on?

**41:41** — Uh great point. So open models,

**41:43** — definitely, as we are seeing the

**41:46** — adoption increasing, and there are some

**41:48** — inherent risks that customers are

**41:50** — concerned about. And Agent 365 is that

**41:52** — control plane and single pane of glass

**41:54** — where you can come and look at what

**41:57** — these open plane open models are doing.

**42:00** — At the same time, you have levers there

**42:02** — that you can operate on to kind of

**42:04** — control the exposure and some of the

**42:06** — permissions. That is basically going to

**42:08** — give you the peace of mind while openly

**42:10** — adopting the innovation and uh not

**42:12** — hampering your developers from building

**42:14** — new agents.

**42:16** — Awesome. Awesome. I know you prepared a

**42:18** — little demo for us as well, so I'm going

**42:20** — to jump into that so then we can then

**42:21** — move on to questions from the chat. Does

**42:23** — that sound good?

**42:24** — Sounds good. Thank you. &gt;&gt; Awesome.

**42:33** — GPM with Microsoft Agent 365. I'm here

**42:36** — to talk about Work IQ MCP servers and

**42:38** — Agent 365.

**42:40** — This session is going to equip you with

**42:42** — the knowledge to leverage Work IQ MCPs

**42:45** — and Agent 365, thereby helping your

**42:48** — organizations to adopt AI by enabling

**42:51** — your agents to be of high quality,

**42:54** — efficiency, and to be well governed.

**43:00** — So before we start,

**43:01** — let's start with

**43:03** — what is Work IQ?

**43:06** — Many of us think AI at work,

**43:07** — and many of us think it's about tools

**43:09** — that help write emails, summarize

**43:13** — documents, or analyze data.

**43:15** — But the reality is that work happens in

**43:18** — dozens of systems, CRM systems, project

**43:21** — management tools, HR systems, internal

**43:24** — databases, and industry platforms. Every

**43:27** — organization has its own ecosystem of

**43:32** — Work IQ is the intelligence layer that

**43:34** — connects information across your

**43:38** — business to understand what work looks

**43:40** — like for each person and organization,

**43:43** — providing the context and insight to

**43:45** — help you get better answers and make

**43:46** — better decisions.

**43:48** — It helps agents

**43:50** — understand things like your company's

**43:53** — projects, priorities, your customers and

**43:55** — partners, your internal knowledge and processes,

**43:59** — the tools and systems your team use

**44:00** — every day.

**44:02** — Work IQ does this easily by connecting

**44:05** — to Microsoft Graph, enterprise data,

**44:07** — business applications, and custom systems,

**44:10** — thereby combining it with your

**44:12** — preference, your work style, your

**44:15** — organizations, so that AI understands

**44:18** — not just generic information, but your

**44:21** — personal work reality.

**44:23** — It helps agents understand things like

**44:25** — your company's

**44:32** — So this becomes even more powerful when

**44:34** — organization builds agents, a sales

**44:37** — agent, a support agent, a finance agent.

**44:39** — Each one can leverage Work IQ to

**44:42** — understand you, your organization,

**44:43** — its data,

**44:46** — and workflows that matter to the role.

**44:47** — This means agents can provide better

**44:50** — insights, automate real work, make

**44:52** — smarter decision, and operate safely

**44:53** — within your organizations' data boundaries.

**44:58** — But when you combine AI reasoning with

**45:00** — organizational knowledge, you unlock

**45:02** — insights and efficiencies

**45:04** — that drives business outcomes.

**45:06** — That's what allows work to truly transform.

**45:11** — But you might start be asking, how does

**45:13** — that intelligence actually reach an agent?

**45:16** — How does an AI model running in Copilot

**45:18** — Studio or GitHub Copilot or a

**45:21** — custom-built agent get to that data that

**45:23** — lives in Teams, SharePoint, Outlook, or OneDrive?

**45:27** — That's where Work IQ MCP servers come in.

**45:32** — are the connecting lever and the

**45:34** — information highway. They are what makes

**45:37** — it possible for any agent anywhere to

**45:43** — Before that, let's start by

**45:46** — understanding what is MCP.

**45:49** — MCP stands for model context protocol.

**45:51** — Think of it as the universal standard

**45:53** — that lets AI models talk to external

**45:56** — systems, a common language between

**45:58** — agents and data.

**46:01** — Before MCP servers, each team building

**46:03** — an AI agent had to write custom integrations.

**46:07** — MCP changes that. It's an open standard,

**46:09** — and Microsoft has embraced it across the board.

**46:12** — What that means for you, an agent built

**46:14** — on compliant framework, whether it's

**46:16** — Copilot Studio, Azure AI Foundry, GitHub

**46:19** — Copilot, or any third-party platform,

**46:22** — you can use your own Work IQ MCP servers

**46:24** — out of box. No custom wiring needed, no

**46:33** — So here is the total surface of M365

**46:36** — data surface available to you through

**46:38** — Work IQ MCP servers.

**46:39** — These eight MCP servers are SharePoint,

**46:43** — Teams, Outlook calendar, Word, OneDrive,

**46:45** — and of course Copilot Search to make

**46:47** — that semantic search possible across all

**46:52** — So here is what I think genuinely

**46:54** — exciting from the platform standpoint.

**46:56** — These MCP servers aren't siloed in one product.

**47:00** — They can work across different agentic

**47:02** — platforms that you use to build your agents.

**47:08** — Besides all this, these Work IQ MCP

**47:10** — servers aren't just powerful, they are

**47:12** — enterprise-ready out of the box. Every

**47:15** — MCP tool call is authenticated through

**47:16** — Microsoft Entra

**47:18** — using OAuth 2.0

**47:20** — and no standing credentials.

**47:22** — They are protected and governed by

**47:24** — Purview sensitivity labels and DLP

**47:26** — policies that follow your data even

**47:28** — inside agent responses,

**47:30** — protected by Defender with prompt

**47:32** — injection defense.

**47:34** — This means your agents operate within

**47:37** — the exact same security parameter your

**47:41** — IT and compliance teams already manage.

**47:43** — No governance gaps, no shadow AIs,

**47:46** — thanks to Agent 365.

**47:48** — So what is Agent 365?

**47:51** — Agent 365 is your agent control plane.

**47:53** — It gives you a registry of agents and tools,

**47:57** — takes care of your access control, it

**47:59** — visualizes the interactions between the agents.

**48:02** — It also provides you interoperable tools

**48:04** — like Work IQ, and of course security

**48:07** — that you saw with Defender and threat

**48:09** — protection and other kind of security

**48:12** — threats that your agents are susceptible

**48:16** — All your agents can be enabled through

**48:19** — Agent 365.

**48:22** — It brings together agent identity,

**48:23** — so you always know who and what is

**48:25** — acting, agent observability so that you

**48:27** — can see what's happening in real time,

**48:29** — agent interoperability so that your

**48:32** — agents can work across the Work IQ as

**48:35** — you saw through the Work IQ MCP servers.

**48:36** — This means

**48:38** — proactive detection, rapid response, and

**48:41** — unified policy, no matter where your

**48:46** — So to recap quickly, Work IQ is the

**48:48** — organizational intelligence layer. Work

**48:51** — IQ MCP servers are the connecting lever,

**48:53** — the protocol level bridge between the

**48:55** — agents and that intelligence,

**48:58** — which brings the eight MCP servers, four

**49:00** — deployment surfaces, and one open

**49:02** — standard of MCP server.

**49:04** — That's what turns generic AI model into

**49:07** — an agent that knows your organization.

**49:10** — Above all, these tools can be controlled

**49:17** — So let's take a look quickly

**49:22** — All right, let's get started with the demo.

**49:26** — So this is the setup of Sarva Sales,

**49:28** — where they have a lot of documents about

**49:31** — their cash flow and finance statements

**49:33** — residing in a SharePoint site under

**49:35** — documents. If you look at these

**49:37** — documents, these are

**49:40** — how the cash flow has been in FY25.

**49:41** — What has been the profit and loss

**49:44** — statements and stuff like that.

**49:46** — So, here is what I decided to build.

**49:48** — I've decided to build a personal

**49:50** — assistant in Copilot Studio

**49:53** — that would help me with my personal task

**49:54** — day-to-day life.

**49:57** — This is basically like I'm trying to be

**49:59** — investing in Zscaler, knowing some of

**50:02** — the information that I can use

**50:04** — about them, for which year I'm using all

**50:07** — the Work IQ MCP servers

**50:10** — that we saw in the presentation.

**50:13** — What are these MCP servers here?

**50:15** — These are the Work IQ calendar MCP

**50:18** — server, Work IQ mail, the SharePoint, Teams,

**50:21** — and the user MCP server, which will help

**50:24** — me get user information like my manager,

**50:27** — and then the Work IQ Word MCP server.

**50:29** — So, let's take a quick look at

**50:32** — what this agent is capable of doing. So,

**50:36** — I have published this agent into Teams,

**50:38** — where I can start asking, "What meetings

**50:39** — do I have today?"

**50:40** — Obviously, because this is a demo

**50:43** — tenant, it doesn't show any meetings.

**50:45** — As you can see on my calendar, there are

**50:47** — no such meetings today.

**50:49** — But, let's take a quick look at what

**50:52** — it's capable of doing.

**50:56** — Um

**51:01** — based on Zscaler's

**51:04** — FY25 performance, help me prepare a

**51:07** — proposal to my manager about buying 100 stocks.

**51:11** — Let's see how it goes about doing the task.

**51:16** — While it's doing the task, let's also

**51:19** — see how can you build this agent that I

**51:21** — built. All you have to do is go to

**51:23** — Copilot Studio,

**51:26** — go under add tool section, and look for

**51:28** — Work IQ,

**51:30** — and search for them under the model

**51:32** — context protocol.

**51:34** — This is where you will see all the MCP

**51:37** — servers that we talked about.

**51:38** — And once you select them, they are

**51:49** — And there you go. The personal assistant

**51:52** — had created a proposal for me

**51:55** — by looking at all the documents,

**51:56** — and all that information is already

**51:58** — stored in my OneDrive

**52:00** — in a wonderful document. Let's take a

**52:08** — While that is loading,

**52:09** — there you go. It's loaded the proposal

**52:11** — for me.

**52:15** — And that looks definitely good. And at

**52:16** — the end of it, there is the investment recommendation.

**52:21** — Of course, let's review the investment

**52:24** — proposal with my manager. So, I'm going

**52:27** — to now use the other MCP servers

**52:30** — in the agent and ask the agent

**52:33** — to send this proposal to my manager,

**52:34** — and then book some time next week to

**52:36** — discuss this proposal.

**52:39** — Also, meanwhile, let's send this to him

**52:44** — As you can see here, the

**52:48** — agent is about to process the document.

**52:50** — It's going to invoke the Outlook MCP server,

**52:54** — send this email out, and then book some

**52:56** — time to discuss the proposal.

**52:59** — Let's take a look at the emails.

**53:01** — As you can see, the document proposal

**53:03** — was shared with me.

**53:04** — And there you go.

**53:07** — Perfect. All three tasks completed.

**53:09** — Email sent to James, who's my manager,

**53:11** — Teams message sent,

**53:13** — and the meeting is scheduled. Let's verify.

**53:17** — There you go. See?

**53:20** — There's a Teams message.

**53:24** — Let's take a look at the Outlook.

**53:27** — That's the investment proposal sent.

**53:29** — And there's the meeting scheduled. Wonderful.

**53:34** — So, all the Work IQ MCP servers coming

**53:36** — together under the umbrella. And

**53:39** — that's the power of this personal

**53:42** — assistant here with Work IQ MCP server.

**53:45** — Now, let's take a look at the governance

**53:47** — angle of the Work IQ MCP server

**53:50** — with Agent 365.

**53:52** — For that, we'll quickly switch over to

**53:55** — Microsoft admin center.

**53:58** — With Agent 365,

**54:00** — if you remember, we get a powerful

**54:02** — registry of all the agents

**54:04** — that are going to be used, what are the

**54:06** — data and the tools that they're using,

**54:08** — what are the security permissions,

**54:11** — and the observability of what these

**54:13** — agents have been doing.

**54:16** — And above all, you also get to look at

**54:19** — the Work IQ MCP servers that we just saw

**54:22** — in the agent that was built.

**54:25** — These Work IQ MCP servers

**54:28** — can be totally governed by blocking them

**54:30** — if you don't like them to be used by

**54:32** — certain scenar- agents.

**54:35** — And that is basically the power of Work

**54:39** — IQ and Agent 365 coming together.

**54:45** — Awesome. Well, that was super

**54:47** — insightful. Srikumar, thank you. I

**54:49** — actually have a couple questions for

**54:51** — you, but uh before I ask my own, I would

**54:54** — love to give the audience to have a

**54:56** — chance to also ask some questions. So,

**54:59** — we have one from Pablo uh Pablo

**55:01** — Codaimich, and he's asking, "If we use

**55:03** — those MCP servers from within our

**55:05** — Microsoft Foundry-hosted agents,

**55:07** — how are we charged in comparison with

**55:09** — creating agents with Copilot Studio that

**55:12** — automatically get access to Work IQ?"

**55:15** — Yeah, so as of today, uh Agent 365 and

**55:17** — these Work IQ MCP servers are in

**55:19** — preview. So, today we are enforcing that

**55:22** — you need the users of these agents need

**55:25** — to have an M365 Copilot license.

**55:27** — We are working on some uh pay-go meters

**55:30** — as well, and hopefully we should have

**55:33** — that revealed soon, so Foundry users can

**55:36** — benefit from the metered option as well.

**55:39** — Got it. Now, um I have a question that I

**55:41** — actually wanted to ask. Oh, we have one.

**55:46** — Wait, we have one from uh jamkuper17950.

**55:48** — Uh do the Work IQ MCP servers only

**55:50** — support tool methods or other methods

**55:54** — such as researchers or subscription?

**55:56** — So, these are Microsoft-provided MCP

**55:58** — servers. Internally, we do use resources

**56:01** — and subs- uh subscribe uh

**56:03** — methods that are coming up. For now, you

**56:05** — will see that uh when the tools are

**56:07** — being run, so in the activity pane, you

**56:09** — can see those tools

**56:12** — making a call to Graph API and other

**56:15** — internal resources as part of the uh

**56:17** — tool invocation. So,

**56:19** — that that is basically the scenario today.

**56:22** — Got it. Now, another question came up

**56:25** — from Behance Lee, who's asking, "Is Work

**56:28** — IQ managed at the tenant level?"

**56:30** — Work IQ, as you I mentioned, is the

**56:33** — intelligence layer. It is basically all

**56:35** — the data that is locked up in emails,

**56:37** — your SharePoint and all. I don't know

**56:39** — what the question means, manage at

**56:40** — tenant level. If the question is about

**56:43** — the MCP servers, let's say, yes, uh the

**56:45** — Agent 365 provides the control plane, so

**56:47** — that you can manage at tenant level. And

**56:49** — then we are also building some controls

**56:51** — in the Power Platform admin center if

**56:53** — you want to go down to the environment

**56:55** — level as well.

**56:57** — Awesome. Uh we have another question

**57:01** — coming from watch what the health 4539.

**57:07** — Uh that's a very vague question. &gt;&gt; [laughter]

**57:10** — &gt;&gt; Yeah, I mean, I wonder if they mean how

**57:12** — do they bug working with Work IQ like

**57:14** — any anything that involves Work IQ,

**57:17** — given that it's has access to your

**57:20** — uh to your company resources in that

**57:21** — sense, maybe?

**57:23** — How to tackle these uh how to tackle

**57:26** — when an issue comes up with Work IQ?

**57:27** — Yeah, it's For example, if you're

**57:30** — building uh a Copilot Studio, as I was

**57:32** — showing in the demo, if you're actually

**57:33** — adding a

**57:35** — particular Work IQ MCP server, and if it

**57:37** — runs into issue, you will be seeing that

**57:39** — details in the activity pane. You'll be

**57:42** — able to see what particular tool call is

**57:43** — failing. Maybe it's the authentication

**57:45** — that's not working, and you should see

**57:48** — those error descriptions to kind of help

**57:50** — you debug them, right?

**57:52** — Awesome. Awesome. Yeah, that's actually

**57:54** — that actually makes a lot of sense, too.

**57:56** — Um we have another question from uh

**58:00** — Hemandar uh asking, "Is the M365 admin

**58:03** — center {slash} Agent 365 different from

**58:05** — Foundry control plane, which also

**58:07** — provides a 365-degree view of agent

**58:09** — fleet in my enterprise?"

**58:11** — I think actually that's a great

**58:13** — question. So, when you talk of the

**58:15** — Foundry control plane, what you're

**58:18** — seeing there is also a view Think of

**58:20** — this as a developer persona trying to

**58:22** — look at what are all the agents that I

**58:24** — built, what are the things I should be

**58:26** — looking for, errors, exceptions, that

**58:29** — from an agent quality perspective,

**58:30** — versus what you're seeing on the

**58:33** — Microsoft 365 admin center, which of

**58:35** — course is locked down only to global

**58:37** — admins and AI admins, you're looking at

**58:40** — it from a perspective of a CISO or an IT

**58:42** — admin trying to understand what are the

**58:45** — risks out there, and how can I govern

**58:47** — through some by deploying some policies.

**58:49** — Two different purposes. Yes, the name is

**58:52** — confusing, but the purposes and the jobs

**58:54** — to be done and the personas involved are

**58:56** — two distinct two different people there, right?

**58:59** — Got it. Yeah, I think the best way to

**59:01** — think of it, the Foundry control plane,

**59:04** — is look at looking at it as App Insights

**59:06** — from back in the day, where you had

**59:07** — apps, and now you need to pump

**59:09** — telemetry, and you need to see how your

**59:11** — apps are doing. This is basically

**59:13** — retrofit that into the agent world

**59:14** — today. That's basically what Foundry

**59:17** — control plane provides you.

**59:19** — Got it. Awesome. Uh I'm going to take

**59:21** — one more question from the chat, and

**59:22** — then we'll start wrapping up, because we

**59:25** — do have an AMA uh with Srikumar

**59:28** — happening on Friday as well. Uh I highly

**59:30** — encourage you all to come, and I'll show

**59:32** — uh slide for it in a bit. But, uh, the

**59:34** — last question I'm going to take here, um,

**59:38** — it's coming from Pablo Codaimage, uh,

**59:39** — who's mentioning that, at least in the

**59:41** — past, there was a limitation in how much

**59:43** — information the Copilot Studio agent

**59:45** — could get back when getting information

**59:47** — back. What is the state of this in Work

**59:50** — IQ now?

**59:52** — Uh, I need I need some more specifics,

**59:54** — Pablo, to answer that question. What

**59:55** — were the limitations you were running

**59:58** — into, right? If it's about the tokens,

**01:00:00** — basically, then it's purely dependent on

**01:00:02** — the model that you're using in Copilot

**01:00:04** — Studio behind the scene. If it's about

**01:00:06** — the response, then definitely, uh, it

**01:00:09** — depends on what kind of information are

**01:00:11** — you requesting. If you're looking at

**01:00:13** — gigabytes of, uh, documents being

**01:00:14** — processed, obviously, there'll be the

**01:00:17** — same limitations on the Copilot Studio.

**01:00:20** — Uh, remember, Work IQ MCP server

**01:00:21** — and Work IQ are two different things.

**01:00:23** — Work IQ is the intelligence layer that

**01:00:26** — is locked up in your organization. Work

**01:00:28** — IQ MCP is the lever that you're using or

**01:00:30** — the information highway that you're

**01:00:32** — using to connect your agents to that

**01:00:35** — Work IQ. Depending on what platform

**01:00:37** — you're using to build the agent, in this

**01:00:40** — case, Copilot Studio, those orchestrator

**01:00:42** — orchestrator-based limitations and the

**01:00:44** — model-based limitations will still

**01:00:46** — apply. MCP is just, uh, universal

**01:00:48** — plug-and-play kind of a bridge that

**01:00:51** — connects your Work IQ with your agents

**01:00:52** — in the platform that you're building it on.

**01:00:55** — Awesome. And I'm just going to ask one

**01:00:56** — quick question cuz it's a little

**01:00:57** — smaller, I think it'll be faster for you

**01:00:59** — to answer. Uh, it's

**01:01:01** — coming from Watch What the Health,

**01:01:03** — again. Uh, is Work IQ available for

**01:01:06** — individuals? Yes, it is for the

**01:01:08** — builders. And this is where it becomes

**01:01:10** — very powerful going by Microsoft

**01:01:12** — mission, empowering every human, every

**01:01:14** — organization in the planet to do more.

**01:01:16** — So, you should be able to do more with

**01:01:18** — your day-to-day life. Like, take any

**01:01:22** — professional, like seller, financer, HR.

**01:01:24** — All professionals play with these tools.

**01:01:26** — Like, you Who doesn't use emails? Who

**01:01:27** — doesn't use Teams chat? Who doesn't

**01:01:30** — create Word document proposals? Who

**01:01:31** — doesn't need to look up their manager

**01:01:32** — chain? Who doesn't need to look up

**01:01:35** — calendar availability? That is basically

**01:01:38** — like the way Work IQ with Agent 365

**01:01:39** — becomes so much more empowering to all individuals.

**01:01:45** — Awesome. Well, like I said, we do have,

**01:01:46** — uh, oh, this is the slide for Work IQ.

**01:01:48** — If you're interested in learning more,

**01:01:52** — please go visit aka.ms/workiq.

**01:01:54** — Just look it to the, uh, scan the QR

**01:01:55** — code as well.

**01:01:57** — But, like I said, we will be having a

**01:02:00** — Founder Friday AMA on Agent 365 and Work

**01:02:03** — IQ this Friday at 1:30 to from 1:30 to

**01:02:06** — 2:30 p.m. Eastern Time, with Sriram here

**01:02:08** — present. So, if you have any other

**01:02:10** — questions or things that you'd like uh,

**01:02:12** — Sriram to tackle, we'll be hosting that

**01:02:15** — on Friday. For now, I think that take

**01:02:17** — that wraps up the time for us.

**01:02:19** — Thank you so much for coming. Uh, we

**01:02:20** — really appreciate your you're being

**01:02:22** — here, Sriram, as well, presenting such a

**01:02:24** — nice, uh, demo for us. And to the

**01:02:26** — audience, I mean, you're welcome to also

**01:02:29** — join us in the on the Friday AMA. Very

**01:02:32** — excited to have been here, and with not

**01:02:34** — much more to say, I'll say goodbye and

**01:02:44** — Thank you all for joining, and thanks

**01:02:46** — again to our speakers.

**01:02:49** — The session is a part of a series.

**01:02:51** — To register for future shows and watch

**01:02:53** — past episodes on demand, you can follow

**01:02:57** — the link on the screen or in the chat.

**01:02:58** — We're always looking to improve our

**01:03:01** — sessions and your experience.

**01:03:03** — If you have any feedback for us, we

**01:03:05** — would love to hear what you have to say.

**01:03:07** — You can find that link on the screen or

**01:03:09** — in the chat.

**01:03:11** — And we'll see you at the next one. &gt;&gt; [music]
