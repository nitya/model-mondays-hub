# Transcript: Open Models with Fireworks AI & Microsoft Foundry MCP Server

Source: https://www.youtube.com/watch?v=mV8T9QIAEhg

---

_Auto-generated captions, scraped via yt-dlp timed-text fallback and lightly de-duplicated. Minor transcription errors may be present._

**00:11** — Hey everyone. Thanks for joining us for

**00:14** — the next session of Model Mondays.

**00:15** — My name is Anna. I'll be your producer

**00:17** — for this session.

**00:18** — I'm an event planner for Reactor joining

**00:21** — you from Redmond, Washington.

**00:22** — Before we start, I do have some quick housekeeping.

**00:26** — Please take a moment to read our code of conduct.

**00:29** — We seek to provide a respectful

**00:31** — environment for both our audience and presenters.

**00:34** — How we absolutely encourage engagement

**00:36** — in the chat, we ask that you please be

**00:38** — mindful of your commentary, remain

**00:41** — professional and on topic.

**00:42** — Keep an eye on that chat. We'll be

**00:44** — dropping helpful links and checking for

**00:46** — questions for our presenters and hosts

**00:49** — to answer live.

**00:51** — Our session is being recorded. It will

**00:53** — be available to view on demand right

**00:56** — here on the Reactor channel.

**00:57** — With that, I'd love to turn it over to

**01:00** — our host for today, Bethany. Thank you

**01:10** — We are live, folks. That's evidence.

**01:12** — Hi everyone. My mic just got

**01:15** — disconnected. So, I think I'll fix it as

**01:17** — you go on. But, thank you so much for

**01:18** — joining. I hope you can hear me very

**01:21** — well. Today, we have a very, very

**01:23** — interesting session. It's a double

**01:26** — entendre. I think that's what they say.

**01:28** — I don't know. But, we have a very

**01:30** — interesting session with two very

**01:32** — interesting speakers. We'll have a

**01:35** — speaker or a double header. Yes, we have

**01:37** — a double header. We'll have two

**01:39** — speakers. One

**01:41** — who is um

**01:43** — So, So,

**01:45** — Silk Jin will be talking about the

**01:48** — Foundry MCP server. And then, we'll be

**01:50** — having Shonak who'll be talking about

**01:53** — Fireworks AI. It's very interesting

**01:55** — because it says a partnership session.

**01:57** — That means we are spotlighting one of

**02:00** — our very own Microsoft partners that

**02:03** — just joined us. It's I think two weeks

**02:05** — now. They'll tell us. Since they've

**02:07** — joined the Microsoft ecosystem. But,

**02:10** — before we get started, tell us where

**02:12** — you're joining us from. Tell us your

**02:14** — questions. Any question you have for the

**02:17** — Fireworks AI team and they will be happy

**02:19** — to answer. As you can see in the chat,

**02:23** — we have a ton of moderators from

**02:25** — Fireworks AI. So, be sure to leave your

**02:27** — questions and they'll be here to respond.

**02:30** — Okay. Let me introduce our first speaker

**02:33** — for the day, that is Shonak from

**02:35** — Fireworks AI.

**02:38** — How are you doing, Shonak?

**02:40** — Hi. I'm Shonak.

**02:42** — I'm very nice to to meet you folks and

**02:45** — thank you Microsoft for having us. I do

**02:47** — a little bit of presentation about our partnership.

**02:51** — Yeah. How long have you been

**02:54** — I've been at Fireworks for a little less

**02:56** — than two years. It's been a great

**02:58** — journey. And we hope that this

**03:01** — partnership takes it to the next

**03:03** — Yeah. So, I'll hand it over to you for

**03:05** — that presentation.

**03:08** — Um Great. Thank you so much.

**03:11** — Hi. I'm Shonak. I am the field CTO at

**03:15** — Fireworks AI. Uh In today's talk, I am

**03:18** — going to talk a little bit about uh what

**03:21** — Fireworks AI is, what the platform is,

**03:24** — etc. And then, deep dive a little bit on

**03:28** — the partnership between Fireworks AI and

**03:30** — Microsoft Foundry.

**03:35** — So, to give you folks a little bit of

**03:38** — overview about Fireworks AI, uh we are

**03:41** — the fastest inference engine on on

**03:44** — ASICs, uh on non-custom ASIC chips, uh

**03:46** — as well as we have a fine-tuning

**03:50** — platform and we help a lot of customers

**03:53** — build uh production-ready AI systems.

**03:57** — Um We were founded by the team who was

**04:01** — leading PyTorch um at Meta um as well as

**04:04** — a few folks from Google X. We have uh

**04:07** — seven co-founders in in our company and

**04:09** — all of them come with extremely good pedigree.

**04:13** — Um At Meta, for example, we were serving

**04:16** — roughly uh 50 trillion inferences per

**04:20** — day. Um and so, we bring that power of

**04:24** — uh large-scale inference to open models

**04:26** — and for everybody to consume. Uh

**04:31** — We were founded uh in 2022, a little bit

**04:33** — uh a little more than three years ago.

**04:36** — We are currently in Series C uh and we

**04:37** — raised the the funding round with a

**04:40** — little bit of uh money from a lot of

**04:42** — great investors and and that's listed here.

**04:46** — Uh we power a lot of customers. Uh more

**04:48** — than 10,000 users and enterprises

**04:51** — actually use Fireworks today. Uh but,

**04:52** — here are some of our marquee customers

**04:56** — like the Cursor, Notion, Shopify, Uber.

**04:58** — Um if you would have been following the

**05:00** — latest set of news, uh Cursor very

**05:02** — recently launched their Composer 2

**05:05** — model, which was completely

**05:08** — fine-tuned on uh Kimi 2.5 model on

**05:11** — Fireworks as well as it is pre it is

**05:14** — being served on Fireworks today.

**05:21** — Uh So, what do we what does building

**05:24** — agents actually mean? Um at at scale,

**05:26** — right? Because that's what we power. We

**05:29** — power real-time AI applications.

**05:31** — Uh we basically tell people that there

**05:33** — are two main principles you have to

**05:35** — think about when you build an agent or

**05:37** — build an AI application.

**05:41** — Uh first one is that model and product

**05:44** — needs to be co-designed together uh for

**05:46** — best user experiences. In the past,

**05:49** — model has been a commodity uh mostly as

**05:51** — a second thought as an afterthought.

**05:53** — But, we are seeing that the best GenAI

**05:56** — companies that are executing well today

**05:59** — are sort of taking both of these

**06:01** — concepts and like intermingling them in

**06:03** — a way that it feels like a unified experience.

**06:07** — And principle number two is your model

**06:10** — over the course of time actually becomes

**06:13** — your IP. Right? So, you sort of roll out

**06:15** — your application in production. Uh you

**06:18** — start to see user interact with your

**06:20** — product, interact with your model based

**06:23** — on the user feedback. Uh and of course,

**06:26** — with uh with your user consent, you use

**06:29** — the data uh to sort of fine-tune your

**06:31** — model over and over again and align the

**06:34** — model to fit your um domain, right? So,

**06:36** — this is called the model data flywheel.

**06:38** — So, what we have realized is that the

**06:40** — models that are fine-tuned with your data

**06:44** — and the deployments that are optimized

**06:46** — for your workloads, whether it is

**06:48** — real-time processing, whether it is

**06:49** — batch processing, whether it is

**06:52** — background job, uh consistently perform

**06:55** — the best state-of-the-art GenAI models.

**06:58** — Uh and Cursor has shown this very

**06:59** — recently with the launch of their

**07:02** — Composer 2 model.

**07:05** — Uh over to the next slide. So,

**07:07** — talking a little bit about the Fireworks

**07:09** — platform. We talked about the ethos of

**07:12** — Fireworks. Uh The Fireworks platform is

**07:14** — essentially divided into three phases.

**07:16** — The first one is what we call the build

**07:18** — phase where we expose a wide variety of

**07:20** — model library that is now exposed

**07:23** — through uh Azure AI Foundry as people

**07:25** — talk about it. We expose a little bit of

**07:29** — SDKs and CLI and services uh to go along

**07:32** — and sort of build do the experimentation

**07:33** — phase, which is start building your

**07:35** — application. Once you have built out

**07:38** — your application, we also provide uh

**07:40** — additional optimizations. Like we

**07:42** — provide workload optimizations. We have

**07:45** — different types of fine-tuning services

**07:48** — um such as SFT, DPO. We have

**07:50** — reinforcement fine-tuning on our

**07:52** — platform. This is what we call the

**07:54** — customization engine.

**07:56** — The most important part here is the

**07:58** — workload optimization. Uh typically, you

**08:01** — have three dimensions where you want to

**08:03** — optimize your workloads for. Can be

**08:06** — faster. Um you can be cheaper. Uh or you

**08:09** — can have like really good quality. Um

**08:11** — You typically customers prefer two of

**08:13** — them. But, what Fireworks allows you to

**08:16** — do is you can pick all three of them um

**08:18** — with the platform that we have come up with.

**08:21** — Uh And then, once you have customized

**08:23** — your deployments, uh customized your

**08:26** — models to align with your workloads, um

**08:29** — and your domain, you need to scale them

**08:31** — up. And here, we have what we call the

**08:33** — virtual cloud infrastructure layer,

**08:35** — which is built on top of a multi-hardware

**08:38** — uh functionality where you can actually

**08:40** — swap out different types of hardware

**08:43** — without actually uh affecting the

**08:46** — throughput or the uh the tradeoffs that

**08:47** — you're making. Um

**08:52** — So, you have um In addition to it, we

**08:54** — also do allow for things like request

**08:56** — routing where you can do automatic

**08:59** — failovers from one model to another or

**09:01** — from one region to another. Uh we have

**09:03** — what we call session affinity already

**09:05** — built into the system. And session

**09:08** — affinity is where you want to force the

**09:11** — same user to go to the same server so

**09:13** — that you can make the best utilization

**09:15** — of things like prompt caching, which we

**09:17** — automatically enable by default for all

**09:19** — of our customers.

**09:21** — Um We have also seen that with session

**09:25** — affinity comes things like hotspots. And

**09:27** — so, we have load shedding available as

**09:28** — part of our virtual cloud

**09:31** — infrastructure. So, in short, the

**09:33** — virtual cloud infrastructure hides away

**09:35** — and abstracts away all the complexity

**09:38** — that you have with request routing, with

**09:43** — GPU selection, uh with load shedding, uh

**09:46** — with session affinity, etc. to give you

**09:48** — a scale that is extremely high and we're

**09:50** — going to talk about it in the next slide.

**09:55** — Um So, how how do we make use of the

**09:57** — this this scale, right? So, today

**10:00** — Fireworks powers a lot of enterprise

**10:03** — applications. So, we have roughly more

**10:06** — than 10,000 users

**10:08** — um including enterprises that are using

**10:12** — Fireworks globally across US, Asia,

**10:15** — APAC, EU, um etc.

**10:18** — We power roughly 180,000

**10:20** — requests per second. Uh this is actually

**10:22** — real-time throughput and it's constantly growing.

**10:26** — Uh on the number of tokens that we

**10:28** — process, we process more than 13

**10:30** — trillion tokens a day. I think this

**10:32** — slide might be a few days old. I think

**10:34** — at this point we have probably crossed

**10:37** — 15 to 16 trillion tokens a day

**10:38** — uh with our partnership with Microsoft

**10:40** — Foundry. So, we are very excited about

**10:42** — that. Uh but this is like sustained

**10:44** — capacity uh and this is extremely

**10:47** — extremely large. Uh and we have more

**10:50** — than thousand models to support all

**10:53** — types of AI use cases

**10:55** — uh on Fireworks.

**10:57** — Uh over to next slide.

**10:59** — So, with that said, I have given you an

**11:01** — introduction of what Fireworks is, what

**11:03** — the Fireworks platform can do for you,

**11:07** — etc. And now with the partnership that

**11:09** — we just announced a couple of weeks ago,

**11:11** — we are bringing the power of Fireworks

**11:15** — inferencing platform into Foundry as a

**11:17** — first-party application.

**11:19** — Uh and so that means that Fireworks AI

**11:22** — is now available as public preview to

**11:25** — serve best-in-class influence for

**11:27** — state-of-the-art open models in AI

**11:30** — Foundry. So, with this you get day-zero

**11:34** — access to um to new models, right? So,

**11:36** — as and when the new models launch,

**11:39** — Fireworks is either a day-zero provider

**11:43** — for these models or uh a trusted tester

**11:45** — for these model companies. And so, all

**11:47** — of these models launch on Fireworks

**11:49** — either in day zero or in day one mode.

**11:52** — And we want to bring the same speed to

**11:56** — Foundry as well. Um you also get the

**11:59** — low-latency high-throughput inferencing

**12:01** — solution that we have created through

**12:05** — Foundry. And then the the the kicker

**12:07** — here is that we also allow you to now

**12:10** — bring your own fine-tuned models uh and

**12:12** — run them on on Foundry.

**12:14** — Um and so you get all the power of

**12:17** — Fireworks' platform inferencing platform

**12:19** — on on Foundry.

**12:20** — Over to the next slide.

**12:23** — Uh so, these are all the models that are

**12:24** — of course available today and in a

**12:26** — serverless offering or in a pay-go

**12:29** — offering, uh you have Kim E 2.5 which

**12:31** — has like taken the world by storm. Uh

**12:34** — you have MiniMax, you have GPT versus

**12:37** — 120B, you have GPT. You also have GLM 5

**12:39** — which is not listed on this slide, but

**12:42** — it's made available as a pay-go offering

**12:44** — on the serverless. All you have to do is

**12:47** — be part of the uh enable the preview

**12:49** — phase uh and all of these models are

**12:51** — accessible to you in a pay-go capacity

**12:55** — on a token consumption basis.

**12:57** — Over to the next slide.

**12:59** — Um so, we talked a little bit about

**13:01** — this, but here are all the key features

**13:04** — um that are available on Microsoft

**13:06** — Foundry. Um we talked about day-zero

**13:08** — access to state-of-the-art open models.

**13:12** — This helps you discover and deploy and

**13:14** — experiment with serverless models. Uh

**13:16** — the beauty of this is that we are

**13:18** — enabling Data Stones standard offerings

**13:21** — which is these serverless deployments

**13:23** — will be region-based, so either US or

**13:27** — EU. So, if you have very uh complex data

**13:29** — requirements, data residency

**13:31** — requirements, this type of serverless

**13:33** — offering will be able to

**13:36** — uh fulfill that type of requirement.

**13:37** — Uh we talked about bringing the

**13:40** — optimized inference deployments um as

**13:42** — well as uh bringing your own custom

**13:45** — models. This is the first time Microsoft

**13:48** — has introduced the ability to bring your

**13:50** — own weights uh and we will talk about it

**13:53** — in the next slide. And then with

**13:55** — Microsoft Foundry, uh let's go back. And

**13:57** — then with the Microsoft Foundry, you get

**13:59** — the entire

**14:02** — uh enterprise trust and scale that you

**14:04** — have come to rely on Azure, right? So,

**14:07** — you get all the observability, you get

**14:09** — all the evaluations, you get governance,

**14:12** — you get guardrails. So, everything that

**14:14** — you have come to associate with

**14:18** — Microsoft around trust, scale, security,

**14:21** — privacy, compliance, you get all of that

**14:23** — with Microsoft Foundry. So, that's the

**14:25** — power. So, you bring your own weights,

**14:27** — Fireworks brings inference, and

**14:30** — Microsoft brings the governance. That's

**14:32** — how we think of we would like to think

**14:33** — about this.

**14:40** — So, what are like the typical use cases

**14:44** — people try to see or use Fireworks for?

**14:47** — Uh so, we are already seeing a lot of AI

**14:51** — applications and agents being developed

**14:54** — uh using uh open models. That's because

**14:58** — open models are significantly cheaper

**15:00** — um and significantly more efficient to

**15:02** — run than the corresponding frontier

**15:04** — models. And so, when your AI

**15:07** — applications and agents start consuming

**15:09** — those tokens, you want them to be more

**15:12** — real-time. You want it to feel that

**15:14** — you're able to answer a question

**15:18** — uh across your entire document base in

**15:20** — matters of seconds and not minutes. And

**15:23** — you want it to be not cost-prohibitive

**15:25** — for you to create these agents. And this

**15:28** — is exactly why um

**15:30** — open models are very successful and this

**15:32** — is what you can use Microsoft Foundry

**15:34** — for. We have seen that developer productivity

**15:38** — and coding is picking up significantly

**15:40** — with these open models. Again, I gave

**15:44** — you the example of uh Codium developing

**15:46** — their products using Kim E 2.5.

**15:48** — Uh Kim E 2.5,

**15:52** — uh GLM 5, MiniMax are amazing tools uh

**15:55** — or amazing models for integrating into

**15:58** — into your favorite um applications like

**16:00** — Visual Studio Code or GitHub Pilot.

**16:03** — And then the last one is

**16:04** — uh the knowledge retrieval and

**16:07** — enterprise search. Um this has started

**16:10** — to become like extremely important for

**16:12** — for everybody and we are seeing a lot of

**16:15** — applications being built around this in

**16:17** — different domains, not specifically

**16:18** — across like a generalized thing, but

**16:20** — very specialized domains as well. You

**16:23** — will see applications being built around

**16:25** — in the legal space and the medical

**16:28** — space, etc. Uh they all depend on

**16:30** — retrieval and enterprise search. And

**16:32** — again, like open models give you the flexibility

**16:36** — to adopt your models and your

**16:37** — applications to be extremely domain-specific

**16:39** — domain-specific um

**16:43** — uh and uh a solution that actually

**16:45** — doesn't hit your purse uh significantly

**16:48** — and it feels real-time. And so, the user

**16:51** — experience feels extremely beautiful.

**16:55** — Um yeah. So, the we talked about um we

**16:57** — talked about Fireworks platform. We

**17:00** — talked about what makes sense uh to

**17:03** — build out these applications for. Now, I

**17:05** — think let's talk a little bit about um

**17:08** — why do you want to customize AI models?

**17:10** — Why do you want to fine-tune your models?

**17:14** — Uh so, first thing is that

**17:18** — a fine-tuned model allows you to scale

**17:21** — and adapt your and your application to

**17:24** — your enterprise needs, right?

**17:26** — Essentially, data is the mode. Uh there

**17:28** — is no doubt about it. And if you look at

**17:30** — like all the open models and frontier

**17:32** — models, they have been trained on all

**17:34** — the publicly available data. But that's

**17:37** — only like 5% of the world's data. The

**17:41** — real 95% of the data is actually within

**17:43** — your enterprises, within your domains.

**17:45** — And that's why like when you fine-tune

**17:48** — or customize a model, you can get so

**17:51** — much more out of the system.

**17:53** — Uh the second thing is of course like

**17:56** — tailoring your models to your enterprise

**17:59** — data helps you reduce those inaccurate

**18:01** — or irrelevant responses. It helps you

**18:03** — reduce hallucinations.

**18:05** — Um I think this is becoming extremely

**18:08** — critical as you want to move to a world

**18:11** — where you want your agents to be

**18:14** — completely independent uh and want to

**18:17** — run them in a way that you reduce the

**18:19** — inaccuracies and reduce the amount of

**18:22** — time a human has to intervene in the

**18:24** — thinking process and the reasoning

**18:26** — process that the models are making. So,

**18:29** — tailoring your models to these types of

**18:32** — use cases or your data actually helps

**18:34** — reduce hallucinations. Um and the

**18:37** — converse of this is it actually improves

**18:39** — the reliability for very domain-specific tasks.

**18:43** — You can actually also try to move to a

**18:46** — model where your agent has one large

**18:47** — model that &gt;&gt; [clears throat]

**18:50** — &gt;&gt; decomposes your steps into like smaller

**18:53** — uh into like smaller tasks. And then

**18:55** — each of these smaller tasks can be run

**18:58** — with a very domain-specific uh large

**18:59** — language model that's actually very

**19:02** — small in size, like a 1B or a 3B. So,

**19:04** — this is where we are also seeing the

**19:06** — world move towards. And this also gives

**19:09** — you extremely high reliability because

**19:12** — these models are easier to serve. Um

**19:14** — they actually take up much less capacity

**19:16** — and they're much faster. Um and this

**19:19** — also helps improve efficiency, right?

**19:20** — So, it it gives you more precise

**19:23** — results. It helps you improve the

**19:25** — performance of the system. And it of

**19:26** — course gives you a cheaper resources

**19:29** — that are actually becoming like more and

**19:31** — more scarce and more and more uh

**19:33** — uh applications are coming along.

**19:35** — And then of course like uh we talked

**19:38** — about tailoring the solutions. Um so,

**19:40** — models that are fine-tuned for specific

**19:42** — use cases, they give you better results.

**19:44** — They are more context-aware.

**19:46** — You add more information to it, the

**19:49** — model improves, and so the whole data

**19:52** — flywheel actually improves your

**19:55** — solution, your model, your applications

**19:56** — as you start like onboarding more

**19:58** — customers. So, data flywheel is

**20:00** — extremely powerful and this is the

**20:03** — reason why we are seeing more and more of

**20:06** — companies now starting to customize

**20:08** — their models.

**20:10** — Uh over to the next slide.

**20:12** — Uh so, now we talked about like why do

**20:14** — you once you customize your own models,

**20:16** — you can actually bring them into the

**20:19** — foundry. So, here is a small demo

**20:22** — um a small GIF that shows you exactly

**20:25** — how you can sort of bring these model

**20:28** — and can sort of use them

**20:31** — uh to to execute your own application,

**20:33** — right? So, the simplest thing is you

**20:36** — register uh a model in Azure Foundry.

**20:38** — Maybe it is an Azure blob storage you

**20:40** — have already fine-tuned using the Azure

**20:42** — fine-tuning services. Uh you register

**20:45** — the model in in Foundry.

**20:48** — You deploy deploy uses your provision

**20:51** — throughput units and then uh inference

**20:53** — can be run. So, typically this process

**20:55** — that would have taken you

**20:58** — uh days of days of queuing,

**21:01** — uh figuring out where to find the GPUs,

**21:02** — uh figuring out what's the best model to

**21:05** — run, etc. is reduced significantly into

**21:08** — the order of minutes uh and not even hours.

**21:16** — So, what's the best So, now that we have

**21:19** — talked about Microsoft uh AI Foundry and

**21:22** — Fireworks, what's the best offer that

**21:24** — you should use? So, we have both the

**21:26** — offerings, which is serverless, which is

**21:28** — pay as you go, token-based, and we have

**21:30** — provision. Uh so, you folks must be

**21:32** — familiar with provision throughput

**21:35** — units, uh which is a which is a type of

**21:38** — reservation that Microsoft offers. Um

**21:41** — and so, between these two, how do you

**21:43** — pick and choose which type of offer to

**21:45** — work with, right? So, you have

**21:46** — serverless offering in the in the

**21:49** — left-hand side, which is ideal for most

**21:52** — use cases. Helps you uh get started up

**21:55** — easily. Uh you can scale to production

**21:57** — quite quite quickly with it.

**21:59** — Um and it's like very cost-effective

**22:00** — because it's like pay as you go, you

**22:03** — don't have to worry about your

**22:05** — uh time of the day type of traffic patterns.

**22:09** — Um and it's very cost-effective for low

**22:11** — to medium-scale deployments.

**22:13** — Um so, what is it good for?

**22:14** — Experimentation, evaluation of

**22:17** — workloads, uh proof of concepting your applications,

**22:21** — uh or development and testing it, right?

**22:23** — But once you start to hit the scale, you

**22:25** — need or you have your own custom

**22:27** — fine-tunes, you need to move to the

**22:29** — model which is like provision throughput

**22:31** — units, which will give you higher

**22:34** — reliability. Uh it will make it more

**22:37** — cost-effective as you start scaling your

**22:40** — deployments to be significantly higher.

**22:42** — You can bring in additional

**22:44** — customizations that you can't do with

**22:46** — serverless, which is only one type of

**22:48** — offering, but for example, you want to

**22:50** — maybe optimize for time to first token

**22:52** — in some certain cases for your streaming

**22:55** — use cases. Um so, what is it what is the

**22:58** — provision throughput recommended for? Uh

**22:59** — so, it's recommended for production

**23:01** — workloads. Uh you can bring your own

**23:04** — custom base. If you have tons and tons

**23:07** — of data processing of the order of like

**23:10** — 10 million uh tokens per minute type of

**23:11** — data processing. If you have throughput

**23:14** — heavy workloads or if you want like some

**23:16** — real-time application uh or you want to

**23:19** — customize your uh deployments based on

**23:21** — your workloads, you bring in provision

**23:23** — throughput units.

**23:29** — Uh so, why Microsoft Foundry? Um I think

**23:31** — this is a no-brainer. I think Microsoft

**23:34** — Foundry gives you the stability,

**23:38** — uh the scalability, the compliance, etc.

**23:40** — all in the same place, right? So, with

**23:42** — model choice with models, you get to

**23:45** — choose whichever models you want, right?

**23:47** — You have a lot of renting models

**23:50** — available on Microsoft Foundry. You have

**23:52** — now with Fireworks integration, you also have

**23:56** — uh best of the class open models

**23:58** — available on Microsoft Foundry either

**24:01** — through a serverless offering or through

**24:03** — uh PTU offering. Um one for

**24:04** — experimentation, the other one for scaling.

**24:07** — Uh for reliability,

**24:11** — um we provide 99.9% availability um in

**24:14** — line with all the other models that are

**24:17** — available on Foundry today. Uh

**24:18** — the we talked about the Foundry

**24:21** — platform. It is the platform It is like

**24:23** — a unified platform, has the same control

**24:25** — plane. You get the models, you get

**24:27** — training, you get evaluations,

**24:29** — everything in the same place. And of

**24:32** — course, with the scale that Microsoft

**24:36** — sees today, you can go from

**24:38** — uh doing a POC with only maybe like

**24:41** — thousands tokens per minute to billions

**24:43** — of tokens per minute. And so, Microsoft

**24:46** — provides you that that sort of variety

**24:48** — from the smallest unit to the biggest

**24:51** — unit in a very compliant way. And of

**24:53** — course, like we already talked about

**24:54** — Microsoft is known for its security and

**24:56** — compliance. And so, you get that

**24:59** — automatically from Microsoft Foundry.

**25:02** — Um over to the next one. All right. So,

**25:06** — here is a quick demo of uh Fireworks and

**25:08** — Microsoft Foundry integration. So, you

**25:10** — can see Roberto here demoing display on

**25:14** — Foundry. You see a lot of models already

**25:16** — being available. It's very simple. You

**25:17** — click deploy

**25:20** — uh and then this is uh you select a

**25:22** — default rate limit. Uh this is giving

**25:26** — 2.5 on serverless and it's ready to go.

**25:28** — Uh we also provide you both code and

**25:31** — chat. Uh so, you can copy paste the code

**25:33** — uh snippet from

**25:37** — uh Fireworks uh Foundry here. Um and

**25:39** — then you can also deploy base models in

**25:42** — like a PTU capacity. So, here we are

**25:46** — going to deploy uh GPT-OSS-120B.

**25:48** — Uh we already have some default quotas

**25:51** — available for for PTU consumption. If

**25:54** — you need more, please talk to the Azure

**25:55** — Foundry folks

**25:57** — uh for figuring out what your rate

**25:59** — limits should be, right?

**26:01** — Um and this is how you can do uh pretty

**26:03** — straightforward um

**26:06** — uh deployment of base models. Uh and

**26:08** — here is an quick example that we wrote

**26:09** — up in PyCharm

**26:11** — uh to showcase um

**26:14** — the the Firework the different types of

**26:17** — models and how fast they are. Um and

**26:19** — like how complete they are. So, here you

**26:24** — can see uh we simply go to GPT-OSS-120B,

**26:26** — type it in, and you will see that in a

**26:29** — flash, it will show you the results

**26:32** — about what do you know about Fireworks.

**26:34** — There we go.

**26:37** — And and we basically if you look at um

**26:40** — the artificial analysis scores on open

**26:43** — models, you will observe that Fireworks

**26:47** — is the best uh across a wide variety of

**26:51** — open models when it comes to

**26:53** — uh when it comes to non-custom use cases

**26:55** — like running them on maybe Nvidia

**27:00** — hardware or maybe on um AMD hardware as well.

**27:03** — Uh and then this is the last uh

**27:04** — informational thing, which is like,

**27:06** — "Hey, what do you think about like Azure

**27:08** — plus Fireworks?"

**27:11** — Um and you can see how quickly we answer

**27:12** — these questions. Um

**27:14** — Um yeah.

**27:17** — That's um so, that's a little bit about

**27:19** — the quick demo. We can move to the next slide.

**27:23** — Uh so, what are so, what what can you

**27:25** — do, right? So, you can now start

**27:27** — building uh with Fireworks on Foundry.

**27:30** — Please go to ai.azure.com.

**27:32** — We also have uh Fireworks on Foundry

**27:35** — launch event happening this Thursday uh

**27:40** — in the evening. Um the uh the invite for

**27:42** — uh that event is posted in the link

**27:46** — below. Uh please register. We have very

**27:49** — limited slots uh and speakers from both

**27:52** — uh Fireworks AI as well as uh Foundry

**27:54** — are going to be there uh and it will be

**27:57** — a very very exciting event. Uh and if

**27:59** — you want to learn more about Fireworks

**28:02** — integrations, there are links uh posted there.

**28:05** — Um and then if you need more models to

**28:08** — be enabled on Foundry, uh if your model

**28:10** — if your model of choice is not there,

**28:13** — uh please let the Foundry team know.

**28:14** — They work very closely with the

**28:18** — Fireworks team to bring in new models in

**28:21** — the most optimal way for your use cases. Um

**28:23** — thank you.

**28:24** — Uh that was Yeah.

**28:26** — Yeah. Help.

**28:30** — I just wanted to say again, thank you to

**28:32** — the AI the Foundry team here, the

**28:35** — Reactor team here to bring us and give

**28:38** — us the opportunity to talk about uh our

**28:40** — offering. Um I think that this will be a

**28:42** — great partnership. Microsoft has been an

**28:45** — amazing partner as it has been to a lot

**28:47** — of people. I see that there are a lot of

**28:49** — comments in the chat as well. And thank

**28:52** — you to my team uh of Roberto,

**28:54** — Chitashree, and Arjun who have been

**28:57** — consistently replying in the comments.

**28:59** — Uh so, yeah. Thank you, Bethany, again

**29:02** — for having us uh on this conversation.

**29:04** — Yeah, thank you. That was such an

**29:06** — informative session. I've been doing all

**29:08** — the fine-tuning sessions on Model

**29:10** — Mondays and I'm so happy to host you

**29:12** — today because now it now shows

**29:15** — Microsoft's commitment to continue with

**29:17** — fine-tuning, to continue building,

**29:19** — whether you're building agents or just

**29:21** — using generative AI as it is. There's

**29:23** — always an opportunity to customize your

**29:27** — model. And now we have open source.

**29:29** — Previously, only I think you could only

**29:31** — use Foundry local

**29:34** — to customize your AI application your AI

**29:36** — models, but now it's now in Foundry,

**29:39** — which is also really cool. So, thank you

**29:41** — so much. Most of the questions have been

**29:43** — responded to.

**29:45** — I think the main question was, "When is

**29:49** — Fireworks AI coming to Europe? And also,

**29:51** — like fingers crossed that it will come

**29:54** — soon cuz it's my closest region. But

**29:56** — thank you so much for all the questions. And

**30:01** — I don't know. Maybe I can ask you one

**30:04** — question. Personal not personal to you

**30:06** — but personal to how your work has been

**30:08** — at Fireworks. So, is there any like

**30:11** — specific use case that you've seen

**30:15** — the open open source models work really

**30:18** — well, especially in comparison to

**30:22** — the other models? We know it is very

**30:26** — like less costly and you can finish to

**30:29** — do a whole range of things. But is there

**30:31** — like one specific use case you've used

**30:33** — and you're like, yeah, this is mind-blowing.

**30:37** — Yeah, I think like the there are two use

**30:39** — cases that come to mind

**30:42** — for the comparisons to like frontier models.

**30:46** — I think the first use cases coding.

**30:49** — I think the developer productivity has

**30:53** — has essentially taken off with the

**30:55** — introduction of fine-tune with the

**30:57** — introduction of open models and with the

**30:59** — introduction of fine-tuning those open models.

**31:02** — I think a lot of

**31:04** — amazing developer productivity companies

**31:07** — are building on top of Fireworks.

**31:10** — And we have seen not only those developer

**31:17** — companies but also your favorite open

**31:21** — tools that exist actually use Fireworks

**31:23** — Kimmy 2.5 to actually power your

**31:26** — developer productivity use cases

**31:28** — across your different types of tools.

**31:31** — So, developer productivity is the number

**31:33** — one use case that we have seen that has

**31:36** — shown amazing amazing results. And when

**31:38** — I talk about developer productivity,

**31:41** — it's not just about like code but it's

**31:44** — also about doing those additional things

**31:47** — that we as developers typically

**31:50** — procrastinate on or don't don't do

**31:52** — things like documentation or fixing of

**31:56** — bugs or fixing of edge cases

**31:58** — or thinking about aligning some UI

**32:01** — elements. And all of these small little

**32:03** — things add up as

**32:06** — tech debts eventually, right? But like

**32:08** — developer productivity is all about like

**32:10** — taking care of these small things and

**32:11** — not only just about like building

**32:13** — beautiful applications.

**32:15** — And so, these open models have actually been

**32:18** — very very good at like doing the

**32:20** — holistic process. And then the second

**32:22** — use case that we are seeing open models

**32:24** — perform really well at is

**32:26** — document understanding. I think there

**32:29** — has been a slew of open models that have

**32:32** — been dedicated to document understanding

**32:34** — specifically in the VLM domain

**32:36** — and that have really caught up with the

**32:41** — frontier labs for actually like a

**32:43** — fraction of the price. I would say like

**32:45** — 1/6 or 1/8 of the price that you would

**32:48** — typically see with frontier models.

**32:50** — Yeah, whenever I hear about document

**32:53** — understanding, I remember us trying to

**32:57** — build a solution for like to be able to

**33:01** — read handwritten election results and

**33:03** — that was a struggle. So, definitely will

**33:05** — try that out. And then the last question

**33:08** — which we always get is for enterprises,

**33:11** — the main thing is around

**33:14** — the legalities and the licensing and

**33:16** — everything. So, when you're using an

**33:20** — open source model that's been tuned with

**33:22** — both Fireworks and Foundry, where are

**33:24** — the terms of service? Where do you get

**33:26** — all the like which

**33:29** — I don't know if you get the question

**33:31** — like which licensing do they follow and

**33:34** — how do you ensure it's safe to deploy,

**33:37** — secure and and you can also be able to

**33:39** — scale without worry?

**33:41** — Yeah, no, that's a great question. We

**33:43** — get that question quite a bit on like

**33:45** — what's the license that an open model

**33:48** — has been built by? What's the license that

**33:51** — that allows them to like fine-tune the

**33:54** — model, deploy at scale? And so, it is

**33:57** — very important for you to look at the licenses.

**33:58** — licenses. Even

**34:02** — for Fireworks, we do work with a lot of

**34:04** — these frontier labs

**34:07** — to sort of have some provisions carved in

**34:11** — for the licenses. For example, with

**34:13** — Kimmy 2.5, we had like a provision

**34:16** — carved in specifically for Fireworks to

**34:17** — be able to use

**34:19** — the model at scale.

**34:21** — I think but it is almost always

**34:23** — important to look at the models and

**34:25** — fulfill the requirements. Sometimes the

**34:27** — model requirements are very simple.

**34:29** — Sometimes it's as simple as like, hey,

**34:32** — when you actually create an application

**34:34** — using a model, just make sure that the

**34:36** — model is named in a certain way.

**34:38** — For example, Lama had that restriction

**34:40** — at some point. I think Kimmy had that

**34:42** — restriction. So, please follow these

**34:44** — these sort of like very simple

**34:47** — guidelines. The whole beauty of open

**34:51** — models and open source is that you can

**34:54** — you can do a lot of things. But please

**34:56** — make sure that you follow the licenses.

**34:58** — It's actually very important to the open

**35:00** — source community and to the people who

**35:03** — are actually building these models that

**35:05** — you follow those guidelines.

**35:07** — Okay, thank you so much. That's that's

**35:09** — always been a burning question. Thank

**35:11** — you so much, Hanok. It's been wonderful

**35:13** — having you here. And I hope to see

**35:15** — something great in

**35:18** — partnership. And also, I hope to see

**35:20** — everyone who's asked a question going

**35:22** — out and try it out and see Fireworks.

**35:24** — Thank you so much. Yeah, thank you so

**35:26** — much for having us as well.

**35:29** — Okay, so our next segment will be the

**35:32** — news highlight. But don't leave because

**35:35** — we have another segment which is talking

**35:38** — on Foundry MCP server.

**35:41** — So, on the news highlights, we'll

**35:43** — be having Shamila. I'm not sure if she's

**35:46** — on the call. But we'll just talk about

**35:49** — what's new with

**35:52** — in Foundry. Okay, let me play the video

**35:54** — and then in case Shamila you want to say

**35:56** — something, you can join

**36:01** — Hello everyone and welcome to weekly

**36:04** — highlights on Model Mondays.

**36:06** — I'm super excited to share a lot of the

**36:18** — of for from from last week and early

**36:21** — this week. So, let's get started.

**36:24** — First, we have our OpenAI GPT-5.4

**36:27** — Mini and Nano model launch.

**36:29** — We With this launch, we're bringing

**36:32** — frontier level reasoning into low least

**36:34** — latency high throughput scenarios,

**36:37** — unlocking real-time agents, chat, and

**36:39** — automation at scale.

**36:41** — And the Mini

**36:43** — has balanced intelligence and

**36:47** — responsiveness. Whereas the Nano is

**36:50** — ultra fast, cost-efficient routing.

**36:54** — So, you no longer I need to trade off

**36:56** — intelligence for speed and you can use

**37:01** — the idea is to use multi-model

**37:03** — you know, multi multiple models in your

**37:06** — applications and for the different use cases.

**37:11** — Moving on, last week was NVIDIA GTC and

**37:14** — we landed a lot of announcements at GTC. And

**37:17** — some of the announcements on the models

**37:21** — front is that we are bringing Neumotron

**37:24** — open models with accelerated compute and

**37:26** — the NIM microservices which we already

**37:30** — brought last year into Foundry. And with

**37:32** — this, you can build once and deploy

**37:34** — anywhere whether it's cloud, hybrid, or

**37:36** — sovereign environments. And it also

**37:38** — enables you to

**37:40** — customize agentic systems with full

**37:42** — control like you can bring your own

**37:44** — weights and open weights kind of

**37:48** — situation. And we also announced like

**37:50** — production-grade physical AI workflows

**37:53** — built on Azure and NVIDIA AI platforms.

**37:54** — And there were a lot of announcements

**37:57** — around sovereign and on-prem AI

**38:00** — deployments through Foundry local. So,

**38:01** — please go

**38:04** — try read this article and you can you'll

**38:05** — learn more.

**38:08** — Moving on, the next big update that

**38:11** — dropped just today and it's very key key

**38:14** — update is priority processing tier tier

**38:18** — on Foundry. And this will allow you to

**38:20** — introduce low with this introduces low

**38:24** — latency with pay-as-you-go flexibility.

**38:26** — And you no no longer need to

**38:30** — over-provision and spend on compute that

**38:32** — you are not using. So, it's ideal for

**38:35** — real-time apps, bursty workloads, and

**38:37** — user-facing AI. And can combine with

**38:40** — PTUs for cost and performance

**38:42** — optimization. So, definitely go check

**38:43** — out priority processing. This is a new

**38:46** — deployment offering that capability that

**38:47** — we just

**38:49** — announced today.

**38:51** — And it's very important for AI sensitive

**38:54** — workloads, ensuring greater performance,

**38:57** — consistency, and pay-per-call

**38:59** — spending flexibility.

**39:02** — The next update that landed last week is

**39:04** — around evaluations, monitoring, and

**39:08** — tracing. And it's now GA and it's fully

**39:10** — integrated into our Foundry control

**39:12** — plane. So, it helps you to do continuous

**39:15** — evaluation replacing one-time testing.

**39:17** — And it's natively integrated with Azure

**39:20** — Monitor. So, you get true production

**39:23** — observability for AI agents. And it also

**39:25** — tracks drift, regressions, and

**39:29** — real-world behavior at scale.

**39:32** — The final update for this week is around

**39:34** — voice agents. So, we have a new public

**39:38** — preview of real-time voice native agents

**39:39** — enabling conversational

**39:42** — multi-multi-model workflows.

**39:44** — And this integration actually brings

**39:46** — together agent orchestration and

**39:49** — real-time voice interaction into a

**39:52** — unified developer experience. So, it's

**39:54** — built for interactive assistance,

**39:55** — customer service, and real-time

**39:58** — co-pilots. And this actually signals a

**40:01** — shift towards fully agentic

**40:05** — multi-modal UX and not just text-based

**40:08** — AI. And it helps you to build build

**40:18** — ready voice native agents that delivers

**40:22** — natural conversational AI experiences.

**40:24** — That brings us to a wrap of weekly

**40:33** — Hello everyone and wel- welcome

**40:34** — welcome to

**40:35** — to to

**40:40** — Hello. I hope you can hear me. My cat

**40:41** — just came in and I don't know what

**40:44** — happened. I lost so my screen and then

**40:47** — it went off. But let me share my screen

**40:49** — again. But thank you so much for joining us.

**40:53** — I hope you can see my screen.

**40:55** — I hope you can also see me. Tell me in case

**40:58** — I'll figure it out. It just

**41:01** — spanned my screen. Sorry for that. Thank

**41:03** — you so much for joining us. Uh next we

**41:06** — have Serkan. Before we go to Serkan, I

**41:09** — will just do two comments on the weekly

**41:12** — highlights. Number one, if you big on

**41:15** — fine-tuning, you know how good GPT-4 or

**41:18** — 41 nano and 41 mini have been in terms

**41:21** — of having that reduced latency,

**41:23** — increased accuracy when you're

**41:25** — fine-tuning it, and then also the time

**41:27** — to fine-tune is very small. So, I'm very

**41:31** — happy to see we have now five

**41:34** — Is it 5.4 mini? No, five mini and five

**41:37** — nano. I will check the the names once

**41:39** — before we can complete.

**41:41** — The next next thing is we had GTT last

**41:44** — week, so very happy about the new

**41:46** — announcements and partnerships between

**41:49** — Vedia and Microsoft. Again, Microsoft

**41:52** — loves partners. Okay, let's go to Serkan.

**41:56** — Our session is very interesting because

**41:58** — I don't know how, but I accidentally

**42:03** — found Foundry MCP in my it's my GitHub

**42:05** — co-pilot. I don't know how it came, but

**42:07** — it was so interesting because I could

**42:10** — ask all the questions I wanted on

**42:12** — Foundry. Like, oh, what project is

**42:14** — there? What can I do? Can I create an

**42:16** — agent slide for my GitHub co-pilot,

**42:18** — which is so interesting. So, I'm so

**42:20** — happy to have you, Serkan. You can do us

**42:22** — one introduction before we go to the demos.

**42:25** — Awesome. Yeah, thanks. Thank thanks,

**42:27** — Bethany. Uh hello, my name is Serkan

**42:29** — Han. I am part of the ecosystems team

**42:32** — for AI models at Core AI and Microsoft,

**42:34** — and I lead the inferencing stack for the

**42:36** — models. Uh as part of the ecosystem

**42:38** — effort, I'm also supporting this Foundry

**42:40** — MCP server stack to help developers to

**42:43** — do more with the Foundry, which is uh

**42:45** — the part that we're going to be covering

**42:47** — today. So, uh thanks for having me and

**42:49** — excited for today's session.

**42:50** — Yeah, thank you so much. So, we'll just

**42:53** — do a quick demo on what the Foundry MCP

**42:56** — is, and then don't leave. If you have

**42:59** — any question in between the demo, please

**43:01** — pop it on the chat and we'll be here to

**43:04** — respond. So, over to the demo.

**43:07** — Mhm. Welcome to the demo of Foundry MCP

**43:09** — server. In the next few minutes, I'll

**43:11** — show you how to manage AI agents and

**43:14** — models on Microsoft Foundry directly

**43:16** — from your editor, CLI, or any

**43:22** — Microsoft Foundry, formerly known as

**43:25** — Azure AI Foundry, is Microsoft's

**43:27** — platform for building, deploying, and

**43:30** — managing AI agents and models at scale.

**43:32** — Everything lives in a project. Your

**43:35** — agent, your deployed models, your

**43:36** — evaluation runs, and your data collections.

**43:42** — From the model catalog, you can browse

**43:44** — the latest models from Microsoft, Meta,

**43:46** — Mistral, and others, and deploy them

**43:48** — directly into your project with a single click.

**43:53** — This is what your agents will use at

**43:55** — inference time.

**43:57** — Agents combine a model with instructions

**43:59** — and tools. You give the agents a system

**44:01** — prompt that defines its personality and

**44:04** — scope, attach function tools or connect

**44:07** — data connections, and Foundry hosts and

**44:08** — runs it for you.

**44:11** — Foundry MCP server exposes all of these

**44:13** — Foundry capabilities through the Model

**44:15** — Context Protocol. That means any

**44:18** — MCP-compatible client, GitHub co-pilot,

**44:20** — co-pilot CLI, Open Code, or a custom

**44:23** — agent can manage your Foundry resources programmatically.

**44:27** — Browse model catalogs,

**44:29** — create and invoke agents, run

**44:31** — evaluations, manage project connections,

**44:34** — and optimize prompts. No portal clicks

**44:36** — required. The public documentation

**44:38** — covers everything you need to get started.

**44:42** — The security section explains that all

**44:43** — MCP connections are authenticated

**44:47** — through Entra ID, either via OAuth uh

**44:52** — flow or uh bearer token from AZ CLI.

**44:55** — The available tools page lists every MCP operation

**44:59** — our Foundry exposes, things like list

**45:02** — agents, create agent, deploy model, run

**45:04** — evaluation, optimize system prompt.

**45:06** — There are also readymade

**45:08** — prompt examples you can copy straight

**45:11** — into your agent client. Let's look at

**45:13** — how you can use that. When you go to

**45:16** — discover and click tools, you see all

**45:18** — the tools they can use along with the

**45:21** — agents. And you filter for remote MCP,

**45:24** — you can find the Foundry MCP server there.

**45:27** — And click it, you can see what it can

**45:30** — do, etc. Simply clicking this connect

**45:33** — button lets you create a new connection

**45:37** — to this Foundry MCP server.

**45:39** — It'll be using the OAuth identity passthrough,

**45:44** — meaning that the MCP server will be used

**45:46** — with your identity and permission

**45:48** — associated with that.

**45:50** — When you create a connection,

**45:53** — you can use that connection and apply

**45:54** — that in

**45:56** — an agent.

**45:58** — For example,

**46:00** — this one is a newly

**46:03** — updated agent that now has access to the

**46:10** — Now, with this, you can

**46:13** — ask questions such as

**46:19** — show me what MCP tools you can use.

**46:22** — You can see that this agent has access

**46:25** — to the Foundry MCP server.

**46:28** — Let's switch to VS Code.

**46:35** — what you need to do is setting up this

**46:44** — You define the Foundry MCP server

**46:47** — endpoint here and set the type to HTTP.

**46:49** — VS Code will ask you to authenticate and

**46:51** — handle the token acquisition and refresh.

**46:54** — And that's the entire setup. No extra

**46:56** — tooling, no manual token management. You

**46:58** — can start using the MCP server in the

**47:05** — Agent skills are structured packages of

**47:07** — instructions, scripts, and resources

**47:09** — that agents automatically load to

**47:11** — perform specialized, repeatable tasks

**47:13** — when relevant.

**47:16** — I have created Foundry MCP skill and

**47:17** — installed it as an agent skill in my

**47:19** — home directory.

**47:21** — When co-pilot loads, it detects the

**47:23** — skill automatically.

**47:26** — Typing {slash} skills shows it's active.

**47:28** — The skill has subskills that guide

**47:31** — co-pilot through complex MCP workflows,

**47:34** — creating agents, deploying models,

**47:36** — running evaluation, optimizing prompts, etc.

**47:39** — The skill tells co-pilot how to use the

**47:42** — MCP tools together, not just which tools exist.

**47:46** — Now, let's give it a try.

**47:50** — Let's say, use Foundry MCP skill to list

**47:53** — all agents in my project.

**47:55** — And I want to copy the project endpoint

**47:58** — that I have in project home, and copy

**48:01** — this project endpoint because

**48:03** — I'm authenticated to this MCP server

**48:05** — using my identity,

**48:08** — the agent will know, and it will have

**48:15** — So, you can see it's reading the skill

**48:18** — that's defined in the agent skill.

**48:20** — It knows

**48:23** — the context uh from this agent skill.

**48:25** — Also, it determined that the agent get

**48:27** — is the MCP tool that's going to be

**48:30** — useful for our case.

**48:31** — And you can see it's calling the MCP

**48:33** — tool, passing the right project endpoint.

**48:37** — And it came back with an output. Now,

**48:39** — the GitHub co-pilot will summarize the

**48:42** — result and return the result in a

**48:44** — uh good format.

**48:46** — Okay, it came back with the list. Let me

**48:48** — try this.

**48:53** — Show me agent detail of local coin agent.

**48:56** — Okay.

**48:59** — It came back with some basic information

**49:01** — and the agent definition,

**49:04** — what tool that it has, and what it

**49:09** — Let me try something else.

**49:12** — Let's try to find the latest chat

**49:13** — completion models available for

**49:16** — deployment. So, we can see that it's

**49:21** — running the model catalog list MCP tool.

**49:24** — So, it ran model catalog list MCP tool,

**49:28** — which came back with multiple models,

**49:31** — and now it's summarizing the result.

**49:34** — Okay, let's try something interesting.

**49:37** — Now, we can try to create an agent. I

**49:39** — gave the Copilot the natural language

**49:41** — description of the agent I want.

**49:44** — It constructs the right NCP call,

**49:46** — saying the system prompt, attaching the

**49:49** — web search tool as I needed it,

**49:52** — assigning GPT 5.2 chat model, and

**49:54** — creates it in the Foundry.

**49:56** — So, the prompt agent is created. It has

**49:58** — the instructions. It has the tools that

**50:00** — I've specified.

**50:02** — Now, using NCP tool, you can also invoke

**50:05** — the agent to see if the agent that I've

**50:11** — Now, let's briefly check out one of the

**50:26** — prompt optimization.

**50:28** — To build it on our tools, we can use

**50:30** — this tool to retrieve the existing

**50:33** — system prompt, optimize it to your need,

**50:34** — and update the agent to use the optimized

**50:38** — For instance, I can try to optimize the

**50:40** — system prompt for this agent to greet

**50:42** — the user with more friendly and cheerful

**50:45** — tone before responding all details. You

**50:47** — can see that it has invoked the agent

**50:49** — tool, and you can verify the tone has

**50:52** — changed. Now, check back on the Foundry portal.

**50:55** — You see that the local time agent tool,

**51:11** — For instance, I can try to optimize the

**51:13** — system prompt for this agent to greet

**51:15** — the user with more friendly and cheerful

**51:18** — tone before responding all details. You

**51:19** — can see that it has invoked the agent

**51:22** — tool, and you can verify the tone has

**51:24** — changed. Now, check back on the Foundry portal.

**51:34** — You see that the local time agent tool,

**51:54** — retrieve the existing system prompt

**51:56** — agent to optimize for the of the agent

**51:58** — profile that the local time agent tool,

**52:05** — in the list.

**52:07** — You can click the agent to see the

**52:10** — updated system prompt,

**52:12** — the model that it's using,

**52:28** — the key 5.2 chat search and construct

**52:31** — Copilot the natural language and

**52:33** — this one. And two

**52:35** — the model that it's using,

**52:45** — Okay, I think let me try one more.

**52:48** — Yeah, it looks like um yeah, the

**52:50** — buffering or something. I can actually

**52:52** — play the video on on my like on my local

**52:53** — machine and share my screen. Did it work?

**52:57** — Uh okay, sure. Cuz it's it's blanking at

**53:00** — like 7 minutes. So, you can tell us from

**53:03** — All right. Let me see if I can share my

**53:05** — screen over here.

**53:07** — And whenever you're ready,

**53:08** — make sure that you're also sharing

**53:11** — system audio. System audio? Yeah, I'm

**53:13** — checking it right now. Yeah. Cool.

**53:16** — Okay, I'm choosing the right monitor here.

**53:20** — Can you see if

**53:22** — the video, the screen that I'm sharing is

**53:26** — visible? Yep, it's good. Okay.

**53:35** — in the list.

**53:43** — Sorry, uh can you confirm that you are

**53:45** — able to hear the sound?

**53:47** — &gt;&gt; Yep, sounds great. Okay, yeah. Let's do

**53:50** — it. The updated system prompt,

**53:52** — the model that it's using,

**53:54** — and also it has the tools that is

**53:57** — intended to have.

**53:59** — The other thing is you can also test the

**54:02** — agent from this Foundry portal,

**54:04** — but you can leverage all the other capabilities,

**54:08** — such as traces and monitor and evaluation.

**54:11** — When you look at these traces, we see

**54:14** — that the messages that sent to

**54:17** — this agent and see

**54:19** — what happened

**54:22** — when we tried the to invoke the agent.

**54:25** — So, for example, when I asked about the

**54:26** — time in Tokyo,

**54:29** — it reasoned that it's Tokyo, Japan. It's

**54:32** — in the specific time zone. Now, it

**54:35** — called the web search tool, sending this

**54:37** — time zone information,

**54:38** — came back with the result, and responded.

**54:44** — Also, you can check out the monitor tab

**54:47** — to check out the statistics of this agent,

**54:52** — or evaluation. They can run using

**54:55** — automatic evaluation, human evaluation,

**54:59** — and with the red team evaluation.

**55:01** — Now, you can try something else.

**55:03** — Let's open up a terminal and try the

**55:06** — Copilot CLI. You can send the a single

**55:10** — prompt and allow all tools to use the

**55:12** — NCP tools that require the permission approval.

**55:16** — This will create a new session, send the

**55:19** — prompt, and get the result.

**55:20** — You see that it recognized the skill

**55:35** — Now, it's calling agent get NCP tool.

**55:37** — If you look look at the response, it did

**55:40** — call the right NCP tool and pass the

**55:42** — right parameters, and it came back with

**55:43** — the agent definition that I was looking for.

**55:46** — This is the agent we just created and

**55:51** — updated and tested. You can also do this with

**55:54** — interactive mode,

**55:56** — so you can continue using the session

**55:59** — that is created there from subsequent interactions.

**56:03** — Open code is another open source agent CLI.

**56:07** — Although it doesn't provide direct

**56:09** — end-to-end authentication, it does have

**56:11** — access to the agent skill, so it should

**56:14** — know how to get the right enter token to

**56:17** — authenticate to the Foundry NCP server.

**56:20** — If you try {slash} skills,

**56:23** — you can find that it has access to the

**56:25** — Foundry NCP skill.

**56:44** — So, it has found the right script to run

**56:45** — to manually authenticate to the NCP server,

**56:50** — and it was able to list the NCP tools it

**56:51** — can use.

**56:54** — Now, it tries the agent get NCP tool and

**56:57** — pass the right argument to it

**56:58** — to get the list of the agents available

**57:05** — There we go. So, it has the list of the agents,

**57:07** — and I can

**57:10** — inspect one of these in detail, or

**57:11** — invoke one of them,

**57:14** — or export the full raw JSON listing for me.

**57:19** — Let's find out how this manual

**57:21** — authentication works. I can open the

**57:23** — agent skill and read through the skill

**57:26** — definition, but I also can

**57:30** — ask my agent to explain it for me.

**57:32** — So, what it actually does is it does the

**57:35** — CLI AZ CLI command to get the token

**57:37** — because I'm logged in into this CLI command.

**57:41** — And it gets the right enter token with

**57:45** — resource or endpoint,

**57:47** — and uses that enter

**57:50** — enter ID enter token to authenticate to

**57:52** — the NCP server.

**57:54** — To recap,

**57:56** — Foundry NCP server brings your entire

**57:58** — Foundry project, agents, models,

**58:01** — evaluations, connections, prompt

**58:03** — optimization into any NCP compatible client.

**58:08** — Combined with the Foundry

**58:11** — NCP server skill,

**58:13** — you get the structured guidance for

**58:15** — complex workflows right inside the

**58:19** — Copilot, Copilot CLI, or Open Code.

**58:21** — Try the prompt examples from the docs,

**58:24** — compare models from the catalog, run

**58:26** — batch evaluations,

**58:27** — optimize system prompts, or configure

**58:29** — new project connection.

**58:32** — Use the agent skill and um documentation

**58:34** — to follow through.

**58:36** — Looking forward to seeing what you build

**58:38** — with Foundry NCP server.

**58:40** — Thank you.

**58:42** — So, that was it. Yeah, I mean, sorry for

**58:45** — the hiccups. I hope that

**58:47** — you were able to see what's included in

**58:48** — the demo.

**58:50** — Yeah, thank you. Thank you for also

**58:52** — saving the day as well. Thank you so

**58:55** — much. I think I will no longer risk

**58:58** — doing an embedded video. Just have

**59:01** — videos already uploaded to StreamYard.

**59:03** — But thank you so much. I think you've

**59:05** — answered most of the questions. Two

**59:08** — things. Thank you for adding the

**59:11** — captions to your video. Very nice. And

**59:13** — then thank you for the you like clips

**59:15** — that you took us from from

**59:17** — why Foundry projects and why you should

**59:20** — use the NCP, and then add a skill to it,

**59:22** — and voila, miracle. So, thank you also

**59:24** — for that. I don't know if there's I

**59:26** — don't think there's any question that

**59:28** — you haven't responded to. Uh

**59:31** — No, I I think there's any question that

**59:33** — you haven't responded to. So, I'll ask

**59:34** — you one on my own.

**59:36** — Um when you're using when you're

**59:38** — building or using MCP

**59:41** — there's a lot of security

**59:43** — issues that have come up in the past

**59:44** — like uh

**59:46** — people can come in and attack because

**59:50** — now they have access. So, how do you

**59:53** — ensure you're building securely and also

**59:57** — safe in the sense of if I have my whole

**01:00:01** — foundry access to GitHub and it goes

**01:00:03** — haywire. How do you get up Copilot or

**01:00:04** — any other models that I'm using and it

**01:00:07** — just decides, "Okay, maybe we won't

**01:00:09** — follow instructions." So, something

**01:00:11** — happens. How do you ensure at the end of

**01:00:14** — the day the safety and you're protecting

**01:00:16** — your own projects and everything that

**01:00:17** — you're building?

**01:00:19** — Yeah, well, first off, I mean, we have

**01:00:21** — the Friday session so we can use that

**01:00:23** — time to answer any questions. Second,

**01:00:26** — uh security has multiple aspects to it.

**01:00:28** — So, we have a dedicated public

**01:00:30** — documentation talking about the you

**01:00:33** — know, security implications there.

**01:00:35** — Please read them through and just a

**01:00:37** — quick quick one,

**01:00:40** — don't put the token in the chat.

**01:00:42** — But, I mean, the agent skills or others

**01:00:45** — will try to like deal with the token

**01:00:48** — like also advise you to re

**01:00:49** — create the token if you have

**01:00:52** — accidentally did that. Other than that,

**01:00:55** — Foundry MCP server is using the entire

**01:00:57** — ID authentication. So, when you connect

**01:01:00** — this MCP server you're authenticating to

**01:01:03** — this MCP server using your identity. So,

**01:01:05** — whatever you can do,

**01:01:08** — this MCP server can do. It does have the

**01:01:11** — permission like approval process

**01:01:14** — on the read only like skills and the

**01:01:16** — right skills. For instance, if you do

**01:01:19** — not approve uh writing and updating the

**01:01:21** — agents or models you have on your project,

**01:01:24** — uh you can actually control that. But

**01:01:27** — again, that's not something very new to this

**01:01:30** — Foundry MCP server itself. It's the the

**01:01:33** — practices that you can follow through

**01:01:36** — from the MCP server concept and

**01:01:37** — practices out there.

**01:01:39** — Um so, yeah, check out the public

**01:01:42** — documentation for security implications.

**01:01:44** — Um and we can chat more on Friday.

**01:01:47** — Yeah, we will be with you on Friday. So,

**01:01:50** — if you have any question for Suchit

**01:01:53** — Sukhjin, I think my friend I'll have

**01:01:55** — like perfected the pronunciation. If you

**01:01:57** — have any questions, we'll be with him on

**01:02:01** — Friday. Come in, ask your questions. And

**01:02:03** — I'm very happy because the time zone has

**01:02:06** — shifted to like 1:30 ET is like my 8:00

**01:02:08** — 9:30. I think it's 30, but it's

**01:02:10** — previously it was like 9:00. So, I'm

**01:02:12** — very happy for that. So, come in, join

**01:02:14** — us. We'll have a very lovely chat with

**01:02:17** — him. If you have any questions, MCP

**01:02:20** — Foundry MCP server and anything around

**01:02:22** — tools and I saw a lot of questions on

**01:02:25** — Logic Apps and tools be sure to come in

**01:02:27** — for the session and we'll have all your

**01:02:29** — questions answered.

**01:02:32** — And then next week we have Corey hosting

**01:02:36** — uh Sree Sreekumar on Agent 365 and

**01:02:39** — Identity. So, pop in and I don't know

**01:02:42** — what Agent 365 is. I remember it was

**01:02:44** — launched by Charles Lamanna in Ignite.

**01:02:46** — So, I think I'll just do my homework and

**01:02:48** — then join and understand what the hell

**01:02:52** — Agent 365 is and how to get started.

**01:02:53** — Other than that, thank you so much for

**01:02:56** — joining us. I've shared on the chat some

**01:02:59** — fine-tuning videos if you want to get

**01:03:01** — started. Uh they're live on the

**01:03:03** — Microsoft developer. So, thank you for

**01:03:05** — that. Thank you also for all the

**01:03:08** — questions. Please join us on Friday for

**01:03:12** — the AMA and we'll happily answer all the

**01:03:14** — questions you have. And with that, I

**01:03:17** — think have a lovely day with still Ali

**01:03:19** — or a lovely evening like myself who's

**01:03:21** — just going to sleep. So, have a lovely

**01:03:36** — Thank you all for joining and thanks

**01:03:39** — again to our speakers.

**01:03:41** — The session is part of a series.

**01:03:44** — To register for future shows and watch

**01:03:46** — past episodes on demand, you can follow

**01:03:50** — the link on the screen or in the chat.

**01:03:51** — We're always looking to improve our

**01:03:54** — sessions and your experience.

**01:03:55** — If you have any feedback for us, we

**01:03:58** — would love to hear what you have to say.

**01:04:00** — You can find that link on the screen or

**01:04:01** — in the chat.

**01:04:07** — &gt;&gt; [music]
