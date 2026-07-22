# Transcript: Building Microsoft Foundry Agents Within VS Code

Source: https://www.youtube.com/watch?v=Qxq-vB44nUk

---

_Auto-generated captions, scraped via yt-dlp timed-text fallback and lightly de-duplicated. Minor transcription errors may be present._

**00:04** — Hi everyone. Thank you for joining us

**00:06** — for our next live stream.

**00:09** — I'll be your producer for this session.

**00:11** — Before we start, I do have some quick housekeeping.

**00:14** — Please take a moment to read our code of conduct.

**00:18** — We seek to provide a respectful

**00:19** — environment for both our audience and presenters.

**00:23** — While we absolutely encourage engagement

**00:25** — in the chat, we ask that you please be

**00:27** — mindful of your commentary, remain

**00:33** — Keep an eye on that chat. We'll be

**00:35** — dropping helpful links and checking for

**00:37** — questions for our presenters to answer live.

**00:41** — Our session is being recorded. It will

**00:44** — be available to view on demand right

**00:46** — here on the Reactor channel.

**00:48** — With that, I'd love to turn it over to

**00:50** — our speakers for today. Thank you for joining.

**00:54** — Thank you, Anna. Thank you for the

**00:57** — introduction. And hi everyone.

**01:00** — Welcome to another episode of Modern

**01:03** — Mondays. Actually, welcome to the final

**01:06** — episode of season 3 of Modern Mondays. I

**01:08** — have the honor today to kind of wrap up

**01:11** — uh season 3 of Modern Mondays.

**01:13** — As you join, let us know where you join

**01:16** — from and if it's your first time joining

**01:19** — a Modern Mondays episode or if you are

**01:22** — sort of familiar with the show already.

**01:24** — Um and if you have any feedback, of

**01:26** — course, please let us know as we are

**01:29** — kind of baking new things for the next season.

**01:33** — Uh I'm Carlotta Salucha. I'm a senior AI

**01:35** — advocate in the developer relationship

**01:37** — team at Microsoft.

**01:39** — Uh and I'll be your host for this uh for

**01:42** — today's episode. Um if it's the first

**01:44** — time for you joining the show, uh Modern

**01:46** — Mondays is a series running on Microsoft

**01:48** — Reactor every Monday

**01:51** — designed with the mission of helping AI

**01:53** — engineers and AI developers in the

**01:56** — authentic AI model journey and also to

**01:58** — stay kind of up-to-date with the latest

**02:01** — news from the AI world that these days

**02:03** — are, you know, uh sometimes might be a

**02:06** — bit might might feel a bit over

**02:09** — overwhelming. Um we also host AMAs on

**02:11** — Fridays. We are going to have another um

**02:16** — AMA this Friday on Microsoft Foundry

**02:18** — Discord community, but I'll give you all

**02:21** — the details later and Anna will be

**02:23** — sharing some useful links uh on the chat

**02:25** — as well.

**02:28** — Uh and I see Nija from New York. Uh I

**02:31** — see I see uh Jimmy from Singapore. I'm

**02:35** — joining from Italy. Uh it's always uh

**02:37** — cool to see all all these people joining

**02:39** — from all over the world. Thanks for joining

**02:43** — uh today's episode. So, as I mentioned

**02:45** — before, today's episode with today's

**02:47** — episode we kind of wrap up the third

**02:49** — season of Modern Mondays, but don't

**02:51** — worry, we are baking great stuff for you

**02:55** — post Microsoft Build. Microsoft Build is

**02:57** — uh one of the biggest Microsoft events

**03:00** — for developers happening uh on the 2nd

**03:02** — and 3rd June

**03:04** — uh in San Francisco and online, so you

**03:07** — can uh kind of catch up with all the

**03:08** — sessions uh

**03:11** — online as well. Um so, uh for Modern

**03:14** — Mondays, stay tuned and keep an eye on

**03:16** — the GitHub repo where we post all the

**03:19** — content for the series and the Reactor page

**03:23** — um so you can, you know, stay up-to-date

**03:26** — and uh see all the announcements.

**03:28** — Um so, for those of you who are familiar

**03:30** — with the show, uh today's episode will

**03:33** — be a little bit different. It will be

**03:36** — everything about tech spotlights. We

**03:39** — have two guest speakers showcasing

**03:43** — practical demos. Um so,

**03:46** — let me uh share the two guest speakers

**03:49** — we are going to have today. Um

**03:51** — we are going to have, first of all, uh

**03:54** — Jianji Li uh walking us through the

**03:56** — end-to-end journey of the authentic AI

**03:59** — development with Microsoft Foundry

**04:01** — Toolkit for Visual Studio Code. And then

**04:03** — we are going to talk to Felicia Shaw

**04:07** — about observability skills for uh GitHub Copilot.

**04:13** — Uh okay, I see much I I see lots of uh a

**04:15** — few comments in the chat, people sharing

**04:17** — where they are uh joining from. Düsseldorf,

**04:19** — Düsseldorf, uh

**04:22** — Kampala, Uganda, Phoenix, uh Bermuda.

**04:25** — Well, wonderful. Thank you so much. Um

**04:29** — okay, so let's get started.

**04:32** — As I said, um we are going to start with

**04:35** — um the Foundry um building agents with

**04:37** — Foundry Toolkit for Visual Studio Code.

**04:39** — Um unfortunately, Jianji couldn't join

**04:42** — us today live as it's night where he

**04:45** — lives. Um but he shared with us a

**04:47** — beautiful practical demo that we are

**04:50** — going to watch uh in a minute. Uh Jianji

**04:52** — is a senior PM in Microsoft developer

**04:55** — division and he's part of the Microsoft

**04:58** — Foundry Toolkit product group. Um you're

**05:00** — going to you're going to have the chance

**05:03** — to meet him live on Discord on Friday,

**05:05** — so make sure to, you know, um

**05:08** — join the Microsoft Foundry Discord

**05:10** — community and join us on Friday so you

**05:13** — can talk to him directly. Um uh

**05:17** — but again, today uh we have a very nice

**05:20** — demo uh he recorded for us. But before um

**05:23** — before watching it,

**05:24** — uh for those of you who might have

**05:27** — missed the news last week, let me share

**05:29** — that um

**05:33** — we um announced the general availability

**05:35** — of Microsoft Foundry uh Toolkit for

**05:38** — Visual Studio Code. Um so, the extension

**05:40** — was previously known with the name of

**05:43** — the AI Toolkit. Uh so, uh you might be

**05:46** — familiar with that name. Uh and by the

**05:49** — way, I'm I'm very curious if anyone here

**05:50** — uh has any

**05:53** — um you know, is familiar already with

**05:56** — uh with this extension uh and if so, let

**05:59** — us know um if you used it in your in

**06:03** — your projects and how how you used it.

**06:05** — Um so, the new name Microsoft Foundry

**06:08** — Toolkit for Visual Studio Code reflects

**06:10** — uh where we are heading to. Um so, a

**06:13** — single unified developer experience

**06:16** — within your IDE, Visual Studio Code, uh

**06:17** — for everything on the Microsoft Foundry

**06:20** — platform. Um

**06:21** — and um

**06:24** — let me share also some uh useful

**06:27** — resources so you can uh see all the uh

**06:29** — all the details. Uh so, first of all, to

**06:31** — install the extension, which might be,

**06:34** — you know, your kind of first step, um

**06:37** — you can follow this link in here, aka.ms/foundrytk.

**06:41** — Again, all these links will be shared in

**06:44** — the chat as well. Um

**06:47** — and then if you want to read, um there's

**06:49** — a couple of blogs that you might want to

**06:52** — read um that we published last week. One

**06:55** — is the uh GA announcement blog and there

**06:57** — that contains, you know, a few other uh

**07:00** — useful resources for you to get started

**07:02** — and also the deep dive blog where you're

**07:05** — going to find some more uh

**07:09** — detailed um descriptions of the latest

**07:12** — and greatest features released in the uh

**07:14** — latest release of the Microsoft Foundry

**07:18** — Toolkit for Visual Studio Code. Um okay,

**07:20** — uh enough talking. Let let me roll uh

**07:23** — the video out and then after that, I'll

**07:26** — try answering a few questions. Um

**07:27** — so, if you have some questions, feel

**07:30** — free to post them in the in the chat. Uh

**07:31** — I'll try answering a few questions in

**07:34** — the live streaming and then uh I will

**07:37** — collect a few other questions for Jianji

**07:40** — uh to respond to you directly uh during

**07:42** — the Foundry discussion we are going to

**07:44** — have on Friday.

**07:55** — cannot join you on the live event. I

**07:58** — want to share

**08:01** — the demo with all of you for Foundry

**08:03** — Toolkit for Visual Studio Code.

**08:05** — So, if you have heard AI Toolkit

**08:08** — um before, now we are evolving AI

**08:10** — Toolkit and we branded that to Foundry

**08:13** — Toolkit for Visual Studio Code. This

**08:15** — kind of indicates where we are headed

**08:19** — for. We are uh heavily optimized for

**08:20** — Foundry platform now.

**08:23** — So, today I would love to give you a

**08:25** — comprehensive walk-through on what's the

**08:27** — new capability

**08:30** — here. So, first of all, Foundry Toolkit

**08:33** — um is a VS Code extension. Um so, you

**08:35** — can install the Foundry Toolkit from

**08:37** — Visual Studio Code extension

**08:39** — marketplace. If you simply search Visual

**08:42** — Studio Code, you will see this page and

**08:45** — then you can install into

**08:47** — your Visual Studio Code. Yeah.

**08:51** — Now, let's switch to the primary view of

**08:53** — Foundry Toolkit. This is where all the

**08:56** — interactions and features

**08:58** — are are being built for. So, you will

**09:01** — see two primary sections. One is called

**09:04** — my resources. Those are the resources

**09:07** — that you interact with the tools or

**09:10** — added to the tools and you can have easy

**09:12** — and quick access here. For example, this

**09:14** — is my

**09:17** — um Foundry project. I can easily access

**09:21** — all my models and prompt agents I built,

**09:24** — workflows and hosted agents, etc. Yeah,

**09:26** — it has

**09:28** — uh a lot of other things as well. For

**09:31** — example, local resources that you added,

**09:33** — for example, the local

**09:37** — uh models that you added to the tool. Yeah.

**09:40** — And the developer tools section are the

**09:43** — places you will be using most

**09:45** — frequently. This is how all the features

**09:48** — are located. We can take a quick tour

**09:50** — from here. So, in the discover tab, we

**09:53** — have two catalogs that you can browse.

**09:57** — One is model catalog and another one is

**09:59** — tool catalog. Tool catalog

**10:01** — um is a

**10:04** — centralized hub page for you to explore

**10:06** — NCP tools that you can add to your AI agents.

**10:11** — Yeah, and now moving to the

**10:13** — build section, we have all the tools

**10:16** — that relate to building AI agents and

**10:19** — also working with models, which we can

**10:22** — um cover later. And in the monitor page are

**10:26** — the tools that kind of facilitates you on

**10:30** — uh observability such as trace your AI

**10:33** — agents or evaluating your AI agents. And

**10:37** — one that's uh specific to uh

**10:40** — profiling on local models. Yeah.

**10:44** — For today's demo, I'm going to focus on

**10:46** — the two the critical path for developers

**10:49** — building AI agents using the Foundry

**10:53** — toolkit. Um so, in order to spin up a AI

**10:55** — agent really fast with the tool, I think

**10:58** — the first step we all wanted to do is uh

**11:00** — to have a model that AI agent will be

**11:03** — using. So, this is where we can

**11:06** — uh explore millions of uh mix through

**11:08** — hundreds of models in the model catalog.

**11:11** — So, the the Foundry toolkit model

**11:15** — catalog hosts uh models from various

**11:18** — providers um such as Answer Pack, um

**11:21** — GitHub, and of course Microsoft Foundry,

**11:23** — and also some local

**11:26** — model providers such as llama

**11:29** — um and Foundry local as well.

**11:31** — Yeah, so we also have uh various

**11:34** — publishers like the most the models

**11:37** — hosted by for example for models hosted

**11:41** — by Foundry, we have different publisher.

**11:43** — Um for example, we can see uh

**11:48** — Fireworks model which kind of provides um

**11:51** — model access. Yeah.

**11:54** — Uh in the model catalog, you can

**11:55** — actually easily

**11:59** — um deploy model. Um so, let's try to um

**12:02** — deploy model from Microsoft Foundry.

**12:03** — Yeah, let's uh

**12:07** — um try to deploy one with

**12:10** — Deep Seek. Yeah, we can try deploy

**12:14** — a Deep Seek base 3.1.

**12:15** — Yeah, let's

**12:18** — click the deploy button.

**12:19** — So, it will

**12:22** — um take you to a full page where you can

**12:26** — &gt;&gt; [snorts]

**12:32** — &gt;&gt; Yeah, I'll just set the model uh is for

**12:35** — Deep Seek base 3.1, and I can give you a

**12:38** — custom deploy name, so

**12:40** — um I can

**12:43** — find it later.

**12:45** — Yeah, everything else I'll just set as

**12:49** — um default one, so I can slightly

**12:50** — increase the

**12:53** — uh token per minute settings.

**12:58** — Yeah.

**13:02** — So, yeah, easy as that. So, your model

**13:05** — has been deployed. Now, we can navigate

**13:06** — back to the models uh

**13:09** — list in the tree view. Maybe if you refresh.

**13:17** — Yeah, you will see this is um

**13:21** — the model I just I just deployed with the

**13:30** — Yeah, you can you can see that uh the

**13:32** — model is streaming back all the informations.

**13:35** — Um I can

**13:37** — easily tell that it's working as

**13:41** — expected. So, next thing is I can uh

**13:43** — either do view code. Uh

**13:48** — For example, it gives me um a a complete

**13:50** — code snippet in the agent framework

**13:52** — where I can integrate this model in my

**13:56** — application if I'm building a unpowered apps.

**14:00** — Or uh I can even do a compare uh like I

**14:01** — can compare

**14:07** — Deep Seek model with a GPT-5 model to

**14:10** — see which one

**14:12** — is better. So,

**14:14** — in this side-by-side compare view

**14:18** — I can trigger the same prompt um for

**14:22** — each model and to see um how

**14:25** — what's the response look like like, so I

**14:27** — can decide

**14:31** — which model uh really fits my need.

**14:33** — The GPT-5 isn't returning

**14:36** — uh response fast enough. I guess it's

**14:38** — because I have rate limits configured differently.

**14:43** — Uh so, you can from here, you can uh

**14:47** — continue with whichever model um you

**14:50** — feel like best fits your requirements

**14:57** — Uh now, we can see the agent is

**15:00** — streaming back the responses.

**15:05** — And the little box uh indicates it's um

**15:07** — uh calling the web search tool. So, it

**15:10** — sends the query and do fetching

**15:13** — information from web search. So, it is performing

**15:19** — instances.

**15:26** — Yeah, that's kind of um

**15:30** — how a very basic AI agent um

**15:33** — works and how you can create a basic

**15:37** — prompt-based AI agents uh in in a couple

**15:40** — minutes. And if you are happy with

**15:41** — with um

**15:44** — with your results, you can easily save

**15:46** — this agent

**15:52** — Yeah, and from here, you can select the

**15:55** — view code function um like you can view

**15:58** — code snippet that tells you how to

**16:01** — integrate uh with this uh with this

**16:03** — agent in your application. You can call

**16:06** — the endpoint and trigger um

**16:09** — the agent from there.

**16:12** — Yeah, I think the answer looks pretty

**16:15** — good. It has all the references from

**16:20** — from web searches. Yeah. And also uh

**16:22** — from here, like uh you can see that

**16:24** — after I save it to Foundry,

**16:25** — automatically it creates a new version

**16:28** — for me. So, all all these agents are

**16:31** — designed and implemented without leaving

**16:33** — uh Visual Studio Code, which is pretty

**16:35** — nice. Yeah, and and in the agent

**16:36** — builder, there's a lot more things you

**16:39** — can do. Um for example, you can view

**16:41** — conversations to

**16:44** — um drill down what's uh happening inside

**16:47** — the AI agent if you are

**16:49** — uh if you are um

**16:52** — hitting some issues. Or you can also

**16:56** — switch to the evaluation tab to see um

**16:58** — how you can

**17:01** — you know uh create a uh scaffold a test

**17:04** — with like evaluation code to evaluate

**17:07** — the performance of your AI agent.

**17:11** — Yeah. So, that's pretty much about the

**17:20** — Yeah, now that you can see we are ready

**17:24** — um have a feedback from

**17:28** — uh from the final workflow. So,

**17:29** — we can

**17:32** — navigate to

**17:35** — um to the uh to each node to revisit its um

**17:41** — um input so, when user says uh says like

**17:43** — write a piece about what is Foundry, so the

**17:49** — writer actually draft a writing piece.

**17:52** — And then the reviewer took that as an as

**17:54** — an input and provided

**17:57** — like the actionable um feedback. So,

**18:00** — this is uh actually um pretty useful

**18:03** — debugging information, especially when

**18:05** — uh something goes wrong. And then there

**18:07** — are all the events emitted during the

**18:10** — workflow execution. And uh

**18:12** — if there are any error on the event, you

**18:14** — can take it to Copilot

**18:17** — um to fix. And also from here, we have uh

**18:20** — uh tracing features.

**18:22** — Uh if you have you can uh you know use

**18:25** — this setup tracing um for Copilot to set

**18:28** — up the tracing features in your

**18:30** — uh in your code uh which is just a

**18:32** — couple line of uh uh

**18:37** — configuration. Uh it follows the open

**18:39** — telemetry standards where you can export

**18:40** — your trace

**18:43** — uh to the local VS Code uh Foundry

**18:45** — toolkit exporter,

**18:47** — uh and then the local tracing feature

**18:51** — will work. So, you can

**18:54** — see this is the new trace I just invoked

**18:57** — uh during last run, and then we can

**19:00** — you know uh check inside what has been

**19:02** — uh what's the really all the details

**19:06** — about um this uh agent execution.

**19:10** — Yeah, so this one is uh uh executor

**19:13** — writer, and then this is executor um

**19:15** — reviewer. So,

**19:19** — you can see uh like the uh system

**19:23** — prompt, you can see uh what it has been

**19:26** — output from the agent invoke. Yeah, same

**19:28** — as uh reviewer

**19:31** — agent as well. So, this is a very um

**19:35** — typical uh agent workflow execution. So,

**19:39** — it has a writer, the um

**19:42** — uh uh the edge group process, and and

**19:48** — So, that's the feature about agent

**19:50** — inspector. If you close that agent

**19:52** — inspector, you can always uh go from

**19:56** — here to um in the in the tree view under

**20:00** — view tab to review that again. Now, um

**20:06** — you can choose your custom container

**20:08** — registry as well.

**20:11** — Um so, after the deployment, what you

**20:13** — can do is you can

**20:17** — switch over to the remote agent playground.

**20:21** — Um this is the place where you can

**20:24** — interact with your agent that's been

**20:27** — deployed. So, this is one I previously

**20:30** — deployed. So, you can try to interact

**20:33** — with it and then the agents

**20:36** — will also respond to you in a real time

**20:40** — in the playground. Provides a nice

**20:42** — view for

**20:44** — visualizing that responses. Yeah, and

**20:46** — also in the meantime,

**20:47** — you can

**20:48** — kind of

**20:51** — check out all the logs that are coming

**20:54** — from your agent. So, these are also

**20:56** — particularly helpful

**20:59** — to you can you know resolve some errors

**21:01** — with Copilot

**21:03** — if your agent encounters critical

**21:06** — errors. Yeah, you can also search for

**21:10** — different logs and find out the system

**21:14** — log information as well or start a new

**21:17** — conversation here or view

**21:19** — previous conversations. It has all the

**21:21** — conversations from here

**21:23** — and all your agent details are shown here.

**21:25** — Yeah, this

**21:28** — wraps the entire demo where we showed you

**21:31** — how we can

**21:33** — you know, do everything starting from

**21:35** — model to the agent development without leaving

**21:39** — Visual Studio Code. But as you can see,

**21:41** — the Foundry Tool Kit is a

**21:43** — pretty comprehensive tool. There are a

**21:46** — lot of features we did not touch

**21:49** — thoroughly like evaluation.

**21:52** — That's also a very important topic. But

**21:53** — I think the next speaker will introduce you

**21:57** — to how you can do observability for your

**22:00** — Foundry-based agents as well.

**22:03** — Yeah, so that's all about the demo.

**22:05** — If you have any questions,

**22:07** — call out the host role.

**22:09** — Let me know and we can address

**22:15** — for all the questions you had.

**22:23** — Okay, perfect.

**22:25** — This was the demo from Zhanji and I see

**22:28** — a few questions I would like to address

**22:30** — in the chat.

**22:33** — So, the first one is from Chandu. Is

**22:37** — that model deployed to cloud or local?

**22:40** — So, at the in the demo the that Zhanji

**22:44** — recorded, the model is deployed to the

**22:47** — cloud to Microsoft Foundry.

**22:50** — But with the Microsoft Foundry Tool Kit,

**22:52** — you can choose between different

**22:57** — publisher and these include like GitHub

**23:02** — models

**23:07** — within Microsoft Foundry local, so local

**23:09** — models, but also models for example

**23:14** — imported for from Ollama. So,

**23:17** — you can definitely use local models with

**23:19** — the Foundry Microsoft Foundry Tool Kit

**23:23** — for Visual Studio Code as well.

**23:25** — And then I see a couple of other

**23:27** — questions from Nixon.

**23:30** — I imagine that save simply persist it,

**23:32** — but while testing the agent as presented

**23:36** — here will still occur cost, right? Yes,

**23:38** — that's right because

**23:42** — basically the first thing you do when

**23:44** — you want to get started

**23:48** — working with agentic application in in

**23:52** — Foundry Tool Kit is you configure your

**23:55** — Foundry project within the

**23:59** — the extension. And then basically when

**24:02** — you save the agent, you save this agent to

**24:07** — to your Foundry project. But even before

**24:10** — saving the agent, you are

**24:13** — you are using your agent.

**24:15** — You are for example using Microsoft Foundry

**24:19** — as in the demo, you are using Microsoft

**24:22** — Foundry models in your agent. So, you are

**24:26** — using the model as a service with with

**24:28** — an endpoint and so you

**24:32** — you pay for your token usage as well as

**24:35** — tools usage if there's any tools added

**24:39** — to your local agent as well. And

**24:43** — great feedback about the

**24:46** — the the local view.

**24:48** — Thanks for sharing. The the group will

**24:53** — be happy to hear your your feedback.

**24:58** — And then I see another question around

**25:01** — that you kind of recognized the agent

**25:04** — framework Dev UI Inspector layout and

**25:06** — then and yes, that's

**25:08** — that's kind of the same

**25:12** — Dev UI the the same Inspector view. So,

**25:13** — good catch. Okay,

**25:18** — I think I've kind of addressed all the

**25:20** — questions. If you have more questions,

**25:22** — please continue to pass them in the chat

**25:24** — because as I mentioned before, we're

**25:27** — going to have an AMA on Friday Zhanji.

**25:36** — let me jump to our next

**25:40** — section, our next topic covering

**25:43** — Microsoft Foundry observability skills

**25:46** — within GitHub Copilot.

**25:49** — It's very kind of related to what we were

**25:55** — covering before and because

**25:57** — the Microsoft Foundry skill comes

**25:59** — together with the Foundry developer Tool

**26:01** — Kit. So, if you don't need to install anything

**26:05** — in addition to the Foundry developer

**26:06** — Tool Kit.

**26:09** — But for that, I'm pleased to welcome on stage

**26:14** — our guest Felicia Shah, senior PM at CoreAI.

**26:18** — Hi Felicia, how are you doing? Hello

**26:21** — Carlotta. Good, how are you?

**26:23** — I'm doing good. I'm doing good. Glad to

**26:24** — have you on

**26:28** — on the show today. So, do you want to

**26:31** — quickly introduce a bit your role in

**26:32** — Microsoft, Felicia?

**26:35** — Yeah, I'm a product manager on the

**26:38** — Foundry observability team. So, our team

**26:40** — builds much of the

**26:43** — back end of what you saw AIT case

**26:46** — service. So, a lot of the evaluations

**26:49** — and insights and um

**26:53** — data generation management.

**26:54** — And uh

**26:57** — I am particularly working on the

**26:59** — end-to-end experience of how all of this

**27:02** — fits in together to help developers build

**27:07** — agents in this new world where

**27:10** — eval-based agents is going to be your

**27:12** — new version of your test-driven

**27:14** — development if you remember that. So,

**27:16** — that is the focus of

**27:18** — my team.

**27:20** — Yeah, very interesting.

**27:22** — Thanks for sharing.

**27:24** — And do you want to maybe share a bit

**27:27** — more? I know you have a couple of

**27:29** — you prepared a couple of

**27:33** — practical demos for us to see

**27:36** — about Microsoft Foundry skill and

**27:39** — specifically the observability skills.

**27:42** — Do you want to give us a bit more

**27:44** — context before rolling out the videos maybe?

**27:45** — maybe? Yeah,

**27:49** — one of the things that we're using this

**27:51** — skill for is that it's the

**27:55** — skill the skill composes the MCP tools

**27:58** — that you know, basically call the back

**28:00** — end services of the Foundry eval and the

**28:02** — tracing and optimizations and the agent

**28:05** — service. So, the skill is your

**28:07** — your orchestration layer. So, when

**28:09** — you're a developer instead of thinking about

**28:13** — what do I do next? Like how do I um

**28:16** — evaluate this? How do I update my evals?

**28:18** — What should I do to my data sets? How do

**28:19** — I hook in the traces? Um

**28:25** — we have built a semi-automated agentic

**28:28** — loop that allows you and prompts you to

**28:30** — do the next step. It helps you set up

**28:32** — this like continuous eval loop that

**28:35** — helps you against regressions and like

**28:38** — you can diagnose and you can debug and

**28:40** — you can then learn from that and that's

**28:43** — what the skill helps do. So, you do the

**28:44** — evaluation, the diagnosis, the

**28:47** — debugging, the learning

**28:49** — and then you

**28:51** — make sure that when you roll something

**28:55** — out, you upkeep this eval suite.

**28:56** — So, the skill is orchestration layer,

**28:59** — you know, as we know. Yeah.

**29:02** — Yeah, and I know the the demos you

**29:10** — one is about Microsoft Foundry

**29:12** — observability skill in the Visual Studio Copilot

**29:16** — experience, so within the chat. And then

**29:18** — we have another demo within GitHub

**29:20** — Copilot CLI since

**29:24** — the Microsoft Foundry skill

**29:26** — is available across these kind of

**29:29** — different experiences um

**29:32** — within the IDE, but also outside of it.

**29:36** — And so, if you if you agree, Felicia,

**29:38** — I can maybe start rolling out the first

**29:40** — demo video and then we can

**29:42** — comment a bit and see if there's any

**29:44** — questions from the chat.

**29:53** — Download agent code examples from

**29:55** — Foundry public GitHub repo and let

**29:58** — Copilot test it locally.

**29:59** — Copilot will recognize required

**30:01** — environment variables and prompt users

**30:03** — for values.

**30:05** — And then we'll help set up local

**30:07** — environment to run the script and try

**30:13** — Now users can choose to deploy to

**30:15** — Foundry. Copilot will prompt for any

**30:37** — After the agent is deployed, Copilot

**30:39** — will help generate test data and

**30:42** — evaluators for agent evaluation based on

**30:44** — agent context like code.

**30:46** — Generated data sets and evaluators are

**31:08** — User will be prompted to run evaluation

**31:10** — in Foundry, analyze and optimize using

**31:20** — You see here Copilot helps suggest 20

**31:23** — rows of data, eight built-in evaluators

**31:25** — including safety ones and two

**31:28** — agent-specific custom evaluators.

**31:30** — Users can also go to Foundry portal to

**31:43** — Once evaluation completes, Copilot will

**31:45** — auto analyze and do cluster analysis for

**31:47** — evaluation results pointing out

**31:57** — So you see here we have some bad custom

**31:59** — evaluator to fix as well as agent

**32:29** — Now that custom evaluator is fixed and a

**32:31** — new agent version is saved, Copilot will

**32:33** — help auto re-evaluate under the same

**32:39** — When the re-evaluation completes,

**32:41** — Copilot will compare and summarize the differences.

**32:50** — Looks like both custom evaluators and

**32:53** — agents are getting better. Copilot will

**32:55** — also help set up CICD pipelines to

**32:57** — ensure agent updates are validated with

**33:17** — Okay.

**33:22** — I really like this kind of evaluation

**33:25** — driven workflow. Felicia, I think that

**33:28** — especially in these kind of complex

**33:31** — agentic AI systems where there's lots of

**33:34** — factors to

**33:37** — consider when you need to um

**33:41** — like evaluate the system, understand

**33:44** — what's going on in each and every

**33:46** — component, where is the issue if there's

**33:48** — an issue.

**33:51** — Uh it's very um clean and clear, you

**33:53** — know, this kind of workflow

**33:57** — um to uh troubleshoot the issues and uh

**34:00** — optimize uh the code um uh

**34:03** — you you know um

**34:06** — as early as possible. Uh not as a final

**34:12** — Yeah. Yeah, exactly, Carlota. That's

**34:15** — definitely how we think about it and we

**34:17** — I think we think about it as

**34:19** — you know, when you initially

**34:21** — in the pre-AI days of development, you

**34:23** — had test coverage. You had the way in

**34:25** — which you

**34:26** — you know, wrote unit tests and

**34:28** — integration tests and you had all these

**34:31** — um you know, Playwright, for example, is

**34:34** — like a way for you to go and you know,

**34:37** — do really good test simulations. So I

**34:40** — think of evals is just that. It's it's

**34:42** — it's just something that is more rooted

**34:45** — in like data science. It has its own

**34:48** — ways of how it evaluates things against

**34:50** — a non-deterministic

**34:52** — thing that you're evaluating against. So

**34:53** — it's a completely different thing than

**34:55** — writing tests, right? Because tests are

**34:57** — inherently deterministic. So there is a

**34:59** — lot of um

**35:02** — science that goes behind why certain

**35:03** — evaluators are used, why you have

**35:04** — context-specific evaluators, you have

**35:06** — these we have new features called

**35:08** — adaptive rubrics that are adapted to

**35:12** — your specific agent and your specific um

**35:14** — success criteria and adapts to how the

**35:16** — agent behaves so that you can keep up

**35:17** — with the quality of your agent's

**35:21** — performance. So as developers

**35:23** — move towards building more and more

**35:26** — agents to take over logic of their apps,

**35:30** — it becomes very integral for them to ad

**35:32** — adopt evaluators

**35:35** — uh because otherwise they're going in

**35:38** — blind and flying blind in terms of like

**35:40** — handing over logic of something that

**35:42** — they could um you know, investigate and

**35:46** — mitigate and uh regression test but with

**35:48** — the agentic parts of their logic, now

**35:50** — they don't have as many of those skills,

**35:53** — no pun intended to the skills. So that's

**35:56** — one of the purpose of observability is

**35:59** — to bring that muscle into development.

**36:02** — And this really helps you do that.

**36:05** — Yeah, 100% and that's great that

**36:07** — everything is integrated in GitHub

**36:10** — Copilot, you know, so that developer can

**36:12** — do everything within again within the

**36:14** — IDE without leaving the development environment.

**36:16** — environment. Um

**36:19** — Okay, I I cannot see any questions in

**36:21** — the chat so far. Again, if you have any

**36:23** — questions, please post them in the chat.

**36:25** — We're going to address them directly

**36:27** — with Felicia.

**36:29** — Um but at this point I would say let's

**36:32** — roll over the the other video that will cover

**36:33** — cover um

**36:36** — Microsoft Foundry observability skills

**36:39** — within the Copilot CLI and then again

**36:59** — Users can directly ask for trace

**37:02** — information and Copilot will detect

**37:17** — Users can choose to do failure analysis,

**37:19** — dive into trace view or improve the

**37:20** — agent directly.

**37:23** — Copilot will retrieve app insights

**38:04** — You

**38:09** — Users can also query by any response ID

**38:12** — or conversation ID to get a detailed

**38:14** — view including evaluation results as well.

**38:18** — Users can also choose to optimize from there.

**38:37** — It's also quite easy to get an overview

**38:40** — of all traces in the past 1 month, for

**40:15** — &gt;&gt; Okay, that's it for the second demo as well.

**40:16** — well. Um

**40:18** — so thanks Felicia. Do you do you want

**40:21** — maybe to Do you have any comments,

**40:24** — anything you want to add to what we just uh

**40:25** — uh What's

**40:27** — I think it's

**40:29** — I think the only thing I'll say is that

**40:31** — traces become sort of your super

**40:34** — important asset when you're analyzing

**40:35** — any failures, right? It's like your

**40:40** — first step step to um diagnosing and

**40:42** — debugging something that's gone wrong

**40:45** — with your agent. So it just demonstrates

**40:48** — how this is um

**40:51** — easy monitor and you know how we hook up

**40:52** — with that. &gt;&gt; [snorts]

**40:56** — &gt;&gt; Yeah, 100% and again it's great to see um

**40:58** — you know that you can use the

**41:01** — observability skills not only inside

**41:03** — your ID but also

**41:05** — uh here we are you know in the CLI so

**41:08** — outside the ID we're using logs on Azure

**41:12** — so across development platforms. Um so

**41:16** — we have a question for from Pablo. Uh in

**41:18** — a multi-agent application are the

**41:20** — evaluation results for the outermost

**41:24** — agent only? Is it possible to decide for

**41:26** — each of the agents in the configuration

**41:30** — a different eval when run together?

**41:31** — Yeah, I think this is a really good

**41:33** — question in multi-agent systems and yeah

**41:36** — we we do have um

**41:39** — the ability to actually

**41:44** — span a trace sort of like when one agent

**41:46** — hands it over to another agent, you

**41:47** — know, so um um

**41:51** — then that other agent goes and runs its

**41:53** — own conversation or goes and like does

**41:56** — its own task. So um

**41:59** — like the multi-session view is like what

**42:02** — we call it and we do pull in all those

**42:04** — like traces back and like are able to

**42:08** — like pull in we call them like spans in into

**42:13** — um our evaluation. Um and yeah we're

**42:17** — able to actually factor that in um to

**42:18** — how our evals are built. But it's like

**42:21** — an ongoing process in terms of how well

**42:24** — it'll work with multi-agent orchestrated systems.

**42:29** — Thanks Felicia for the answer and thanks

**42:32** — Pablo for for the questions. Um

**42:35** — so if there's

**42:38** — um no more question I would uh just want

**42:40** — to really thank you Felicia for the

**42:43** — demos you shared with us and uh for

**42:45** — answering the questions, for giving all

**42:48** — the context. Um

**42:51** — Again, I think we Yeah, you Anna shared

**42:53** — with you the link

**42:57** — um in the chat uh to um a repo uh where

**42:59** — you can see a sample of using the

**43:01** — Microsoft Foundry observability in a

**43:03** — real-world project. Oh, we we have a

**43:05** — couple of more questions. So Felicia, if

**43:07** — you don't mind uh we can maybe address

**43:09** — them. Uh

**43:12** — Uh we have a follow-up question from

**43:15** — Pablo again. Um is it possible to use a

**43:18** — skill and an MCP server for accessing

**43:20** — the evaluation setup and results from

**43:23** — other large language models or agents as

**43:27** — we can access traces with the Spire?

**43:30** — Yeah, so we actually our skill works for

**43:32** — non I think you're you're probably

**43:34** — asking if it works on non-Foundry

**43:36** — agents. So yes, our skill works on

**43:40** — third-party agents and you can

**43:43** — um utilize the skill for non-hosted

**43:46** — non-Foundry agents. Yes.

**43:49** — Great. Uh and then Jace

**43:51** — uh asked if if it Is it easy to

**43:54** — distinguish them based on span ID since

**43:56** — you were talking about different spans

**43:57** — for evaluating different &gt;&gt; Yeah,

**43:58** — &gt;&gt; Yeah, um

**44:03** — I'm not sure I like easy to distinguish um

**44:06** — I I

**44:09** — I guess like maybe like eval

**44:11** — what is easy to distinguish? I'm not I'm

**44:13** — not sure I understand the question fully.

**44:20** — Yeah. Um yeah, maybe Jace you can

**44:22** — uh add some more uh details on your

**44:32** — By the way, thank thank you everyone for

**44:34** — uh for sharing your questions with us.

**44:36** — Appreciate it.

**44:38** — You can get like a trace replay so

**44:40** — that's a feature that's coming where you

**44:43** — can like actually look into maybe maybe

**44:45** — they're asking about

**44:47** — being able to find the root cause of

**44:51** — like where this error is coming from. So

**44:54** — yeah, we have a trace replay view um

**44:57** — that's going to be um shipped by build

**44:59** — so you'll be able to see that which is

**45:06** — Um different agent span ID. Yeah, I

**45:07** — think that so I

**45:09** — yes, I think that's what I I was

**45:11** — referring to is being able to like

**45:13** — actually see how the agents like like

**45:16** — interplay. So that's mostly like a trace

**45:17** — replay feature where you can see like

**45:19** — the nested um

**45:22** — you know view of the spans and like how

**45:25** — that multi multi-agent conversation like

**45:27** — goes through. Yeah.

**45:30** — Yeah, good to know it's coming. Um perfect.

**45:33** — Thank you so much Felicia for joining us today.

**45:37** — Again for the demos and answering the

**45:40** — questions from from the community.

**45:42** — Um if you want to

**45:45** — uh if you want to uh try out Microsoft

**45:47** — Foundry skills again they come

**45:50** — uh the Foundry developer toolkit so you can

**45:54** — download the extension in Visual Studio

**45:56** — Code or um

**45:59** — you know uh as you as you have seen from

**46:01** — the latest demo you can also use

**46:03** — Microsoft Foundry skills

**46:06** — uh in the Copilot CLI

**46:09** — uh and in the chat you can see uh the

**46:11** — repo where uh

**46:13** — a sample of using Microsoft Foundry

**46:15** — observability skills in a in a

**46:18** — real-world project. Um any final

**46:20** — thoughts Felicia, anything you want to

**46:22** — add as next step or

**46:23** — &gt;&gt; Yeah, definitely go try out the repo

**46:26** — that I linked with the skill. Um would

**46:28** — love for you to actually try it out and

**46:30** — try using that skill. It's like the one

**46:31** — of the fastest and the easiest ways to

**46:33** — be actually start with observability and

**46:34** — actually even continue with

**46:36** — observability. Um and feel free to like

**46:38** — leave me issues on that repo. I can

**46:40** — respond over there for answers. Like

**46:43** — it's it's a it's a public repo but I can

**46:45** — interface on.

**46:47** — Okay. Awesome. Thank you so much. It was

**46:49** — great having you on the show Felicia.

**46:49** — Thank you. &gt;&gt; Thanks.

**46:54** — Uh nice. So let's uh

**46:58** — um go back to the deck um

**47:02** — so we can wrap up for this

**47:05** — um episode. So um um

**47:09** — as I say this is the final episode for

**47:12** — Modern Mondays episode sorry season 3.

**47:15** — Uh but we still have

**47:19** — uh a Foundry Friday AMA this Friday. Um

**47:22** — it will be at an unusual time so please

**47:25** — keep an eye on the slot which is time

**47:27** — slot which is different from the usual

**47:28** — uh slot

**47:30** — uh we

**47:31** — um we usually

**47:34** — uh host our Foundry Friday AMA on the

**47:37** — Microsoft Foundry Discord community.

**47:39** — Um and uh this is again to you know

**47:41** — accommodate all the time zones of our

**47:45** — guest speakers um and our host as well.

**47:48** — I will be your host for the AMA as well.

**47:49** — John G will

**47:53** — um join us um

**47:56** — uh John G will join us live to answer

**47:58** — all your questions related to the

**48:00** — Foundry developer toolkit or if you want

**48:02** — to come with your feedback if you

**48:04** — already tested the extension and you

**48:07** — want to share any feedback with John G

**48:09** — he would be very happy to uh

**48:12** — to hear it from you as well.

**48:15** — Um and as we wrap up again a few uh

**48:18** — links and resources that might be useful

**48:19** — for you.

**48:22** — Um you have first link and QR code which

**48:25** — is the Microsoft Reactor page with all

**48:28** — the past episode at this point since

**48:31** — this is the final um

**48:33** — episode of the season but you are going

**48:35** — to have

**48:39** — um them posted there also the upcoming

**48:41** — uh episodes of the new season so keep an

**48:43** — eye on that page. And then you have the

**48:45** — Discord link and QR code

**48:48** — to join Friday AMA and all the upcoming

**48:51** — AMAs um for Modern Mondays that will

**48:55** — come uh in the next months. Um and then

**48:57** — we have the the the GitHub repo where

**48:59** — you're going to find all the demos and

**49:04** — content shared by our guest speakers

**49:07** — uh in in in the in the Modern Mondays uh

**49:09** — show. Uh so thank you so much for

**49:11** — joining us today.

**49:14** — Um and um yeah, I'm honored to kind of

**49:16** — wrap up today the

**49:18** — uh the season 3 of Modern Mondays.

**49:21** — Hopefully this was uh you know uh

**49:24** — enjoyable and helpful to you

**49:25** — um and uh feel free to share your

**49:28** — feedback with us as well so we can you

**49:32** — know uh improve uh always a bit more one

**49:35** — season uh after the other. Thank Thank

**49:37** — so much everyone and

**49:40** — uh see you on Friday for the uh final

**49:53** — Thank you all for joining, and thanks

**49:56** — again to our speakers.

**49:58** — This session is a part of a series.

**50:01** — To register for future shows and watch

**50:03** — past episodes on demand, you can follow

**50:07** — the link on the screen or in the chat.

**50:08** — We're always looking to improve our

**50:11** — sessions and your experience.

**50:12** — If you have any feedback for us, we

**50:15** — would love to hear what you have to say.

**50:16** — You can find that link on the screen or

**50:18** — in the chat.

**50:29** — &gt;&gt; [music]
