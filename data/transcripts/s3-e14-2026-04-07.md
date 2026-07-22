# Transcript: Unlocking Enterprise Value with Cohere

Source: https://www.youtube.com/watch?v=7bgLTt1obZI

---

_Auto-generated captions, scraped via yt-dlp timed-text fallback and lightly de-duplicated. Minor transcription errors may be present._

**00:11** — Hey everyone. Thank you for joining us

**00:13** — for the next session of our Model Monday series.

**00:16** — My name is Anna. I'll be your producer

**00:18** — for this session. I'm an event planner

**00:19** — for Reactor joining you from Redmond, Washington.

**00:23** — Before we start, I do have some quick housekeeping.

**00:26** — Please take a moment to read our code of conduct.

**00:29** — We seek to provide a respectful

**00:31** — environment for both our audience and presenters.

**00:35** — While we absolutely encourage engagement

**00:36** — in the chat,

**00:37** — we ask that you please be mindful of

**00:39** — your commentary, remain professional and

**00:42** — on topic.

**00:43** — Keep an eye on that chat. We'll be

**00:45** — dropping helpful links and checking for

**00:47** — questions for our hosts and presenters

**00:50** — to answer live.

**00:52** — Our session is being recorded. It will

**00:54** — be available to view on demand right

**00:57** — here on the Reactor channel.

**00:59** — With that, I'd love to turn it over to

**01:00** — our host for this session.

**01:03** — Andrea, thank you so much for joining.

**01:06** — Hello everyone. Welcome to your Monday,

**01:09** — Model Monday. I am so excited to be here and

**01:13** — please be patient with me. This is my

**01:16** — very first time hosting Model Mondays.

**01:18** — So, it's a different it's a different

**01:19** — kind of show than what I'm used to. So,

**01:21** — but I'm so happy to be here and thank

**01:23** — you all so much for joining. I'd love to

**01:25** — learn where everyone is joining from the chat.

**01:28** — And then we can get right into it. We've

**01:30** — got an exciting lineup

**01:33** — of partner spotlight, but also we have

**01:35** — some news for you.

**01:37** — Um, we're going to dive into something

**01:38** — that's very relevant to all of you who

**01:40** — are joining this stream. I'm sure that

**01:42** — you care about how enterprise

**01:44** — organizations can actually do things

**01:46** — with the AI agents.

**01:48** — Make it work. And so, if you've been

**01:51** — following along either here on this

**01:54** — Reactor series or just any of the other

**01:57** — amazing labs and Microsoft model

**01:59** — releases that happen weekly, uh, there's

**02:02** — a lot of really interesting stuff and

**02:04** — there's a bit of a gap between like what

**02:06** — goes from, I guess, demo to like actual

**02:09** — production things. So, today, I think

**02:11** — the hope is to show you some actual

**02:14** — production, uh, things. Uh, kind of get

**02:16** — past some of those challenges that you

**02:18** — have to actually adopt this into your

**02:20** — own enterprises. And that's why I'm so

**02:22** — excited that our actual partner

**02:24** — spotlight today is Jesse Wilson from

**02:26** — Cohere joining us today. If you're not

**02:28** — familiar with Cohere, you're missing

**02:30** — out. They're up I've been calling

**02:31** — I wouldn't say up and coming is the

**02:33** — correct way to say it, but they are

**02:36** — rivaling the big labs in innovation with

**02:38** — their new models and they are solely

**02:39** — focused on enterprise and Jesse's going

**02:42** — to tell us all about that. Um, and then

**02:44** — of course, we have a bit of news that

**02:45** — are going to be coming up too, but

**02:47** — before we get into that,

**02:49** — I'm Andrea. Hi. You might have seen me

**02:50** — on GitHub channels. I'm a senior

**02:53** — developer advocate and I work mostly

**02:55** — with you all supporting open source and

**02:57** — talking through how you can better ship

**03:00** — code using both open source and GitHub

**03:02** — Copilot. Recently, I've been most

**03:05** — focused on our Copilot Cloud Agent,

**03:07** — which is our sort of rebrand of GitHub

**03:10** — Copilot, um, coding agent. And if you

**03:12** — haven't checked it out or given the

**03:15** — Copilot CLI a try, I invite you to scan

**03:17** — those QR codes. We're hosting this

**03:20** — online and in-person series for GitHub

**03:23** — Copilot Dev Days. So, you have lots of

**03:25** — opportunities to join both in-person and

**03:27** — online. And then the other one, I can't

**03:28** — remember to where it goes, but it goes

**03:30** — to one of my links. So, please let's

**03:33** — connect. I'm happy to like just make

**03:35** — sure some we we we stay connected and

**03:36** — you keep me abreast of what you're

**03:38** — working on and I'll share what I'm

**03:39** — hacking on, too.

**03:41** — Thank you for the invitation to the

**03:43** — Reactor team. It's awesome to be here.

**03:45** — Next, we're going to listen to the news

**03:48** — and highlights with Sharmila. I'm going

**03:50** — to hit play on this and I will be right back.

**03:54** — Hello everyone and welcome to weekly

**03:58** — highlights on Model Mondays. And, um,

**04:00** — again this week we have a few uh,

**04:02** — highlights to share with you across

**04:06** — models, tools and agents. And for every

**04:09** — highlight, we will have a QR code that

**04:13** — takes you to uh, a blog, um, the model

**04:15** — page or, um,

**04:17** — uh, you know, resources where you can

**04:21** — learn more. Uh, so let's get started.

**04:24** — First, um, I want to talk about, uh, our

**04:28** — own Microsoft AI models.

**04:32** — Uh, great news last week, we introduced

**04:35** — MAI transcribe one, voice one and image

**04:38** — two in foundry, which which brings

**04:41** — speech to text, text to speech and image

**04:45** — generation into a unified platform. So,

**04:47** — one of the things that our customers

**04:49** — have been asking is

**04:52** — how can we bring all this into the same

**04:55** — stack to help with the end-to-end

**04:57** — experience, which helps with fewer integrations,

**05:01** — fewer vendors and fewer places for

**05:04** — latency or governance to break. And our

**05:08** — MAI team, Microsoft AI research team, has

**05:10** — can we bring all this into the same

**05:12** — stack and we have delivered on the

**05:14** — end-to-end experience. And the big

**05:16** — unlock with this model launch is that

**05:19** — developers can now build and build

**05:22** — end-to-end multimodal apps, which spans

**05:30** — without stitching together separate s today.

**05:36** — Next up, um, a major focus, um, is our

**05:38** — major focus is improving

**05:42** — extraction quality and not just OCR. So,

**05:45** — Azure content understanding is

**05:48** — our generative AI service within

**05:52** — Microsoft Power Foundry that transforms

**05:55** — unstructured content into clean,

**05:58** — structured and actionable data. And

**06:00** — content understanding actually extends

**06:03** — the document extraction capabilities of

**06:05** — Azure document intelligence, which is

**06:08** — another offering we have, to

**06:10** — unstructured and hybrid document types

**06:14** — as well as multimodal content including

**06:17** — images, audio and video.

**06:20** — So, this platform is actually

**06:22** — So, our foundry platform is actually

**06:25** — evolving towards higher accuracy in

**06:28** — real-world documents where structure,

**06:31** — ambiguity and edge cases matter most.

**06:34** — So, this is about moving from it works

**06:36** — in demos to production-grade document

**06:39** — understanding. So, try Azure content

**06:41** — understanding today along with Azure

**06:42** — document intelligence.

**06:46** — Another offering we have to unstructured

**06:49** — and hybrid we're actually noticing that

**06:53** — retrieval quality actually degrades over uh,

**06:55** — gradually degrades over time.

**06:59** — And new insights on vector drift

**07:02** — highlight why rag accuracy drops after

**07:05** — deployment even without code changes.

**07:07** — And the key causes include embedding

**07:10** — model mismatches, incremental updates

**07:13** — without re-embedding and inconsistent

**07:14** — chunking strategies.

**07:18** — So, we have some done, um, if you go and

**07:21** — take a look at this article, it tells

**07:24** — you the hidden reasons why um,

**07:26** — uh, your rag accuracy

**07:30** — degrades after deployment and how what

**07:34** — you can do to manage that. So, rag is

**07:36** — not a set and forget approach. It

**07:39** — requires ongoing life cycle management

**07:42** — and this article captures that the

**07:45** — details and gives you the right, um, you

**07:47** — know, framework to

**07:50** — set up for success.

**07:53** — Moving on, um, foundry now actually

**07:57** — enables granular cost and usage tracking

**08:00** — at the token level for agents.

**08:03** — So, this gives teams visibility into

**08:05** — cost per workflow, per agent run, token

**08:08** — level inefficiencies and optimization opportunities.

**08:13** — So, we are actually shifting from opaque

**08:16** — spend into real-time cost observability

**08:19** — for AI systems. And it combines three

**08:22** — Azure services like Microsoft AI Power

**08:25** — Foundry, Azure API Management and

**08:28** — Application Insights into an observable

**08:32** — metered AI gateway with granular

**08:38** — And finally, on the news highlights, a

**08:41** — new open source hub approach from GitHub

**08:44** — introduces spec-driven development where

**08:47** — AI builds software directly from

**08:50** — structured applications. So, instead of

**08:53** — prompting ad hoc, teams deliver clear

**08:55** — specs, then the AI generates the aligned

**08:58** — code improving reliability and

**09:00** — collaboration. And this is an open

**09:04** — source toolkit, so go check it out.

**09:08** — And finally, our news on Hugging Face.

**09:09** — We have, um,

**09:13** — a Cohere transcribe Nan Beach 4.13

**09:15** — billion and Octan embedding. So, Cohere

**09:18** — transcribe, it's a fast, lightweight

**09:20** — speech AI

**09:22** — uh, model that enables automatic speech

**09:25** — recognition at scale with a compact

**09:27** — footprint. So, ideal for real-time

**09:29** — transcription, call analytics and

**09:31** — voice-driven applications.

**09:34** — Nan Beach 4.13 billion, it's a small

**09:37** — model, but but with big capabilities and

**09:40** — it delivers strong performance across

**09:43** — reasoning, coding, tool use and deep

**09:45** — search. A It's a powerful option for

**09:48** — teams looking for efficient, versatile

**09:50** — text generation without large model

**09:53** — overhead. And finally, Octan embedding,

**09:54** — it's a

**09:57** — It powers smarter retrieval and it's

**09:59** — optimized for semantic search,

**10:01** — retrieval, and similarity tasks. And

**10:03** — it's a critical building block for rag

**10:05** — pipelines and search-driven applications.

**10:09** — That's um

**10:10** — so again,

**10:11** — from with all these news, what you're

**10:13** — seeing is

**10:15** — we have the end-to-end AI stack in

**10:18** — Microsoft Foundry. So, we have

**10:20** — everything from proprietary models, from

**10:23** — our own Microsoft models, to Hugging

**10:26** — Face open models. And we try to make

**10:29** — sure that you

**10:32** — you get access to anything that's out

**10:34** — there with the latest and greatest model

**10:37** — development tools, agents, anything that

**10:39** — you want in one platform, so you don't

**10:42** — have to go about hunting for

**10:44** — what's new and try to stitch things together.

**10:48** — That brings us to

**10:50** — uh the end of Model Mondays highlights,

**10:57** — Well, thank you so much to Sharmila for

**11:00** — that news update. I hope all of you

**11:01** — caught all of the links, and if you

**11:03** — didn't, Anna, thank you so much. I see

**11:05** — that you are online sharing some of the slides,

**11:08** — um some of the links.

**11:11** — But if there's a specific link um that

**11:13** — you were particularly interested in and

**11:14** — you didn't catch it,

**11:16** — hey, please let us know and we'll go

**11:18** — ahead and post it. Thank you, Jael, and

**11:20** — thank you, Nicole, for posting on the

**11:22** — chats as well. I finally got eyes on

**11:24** — you, so I can see I can see what you

**11:27** — see. Um but let's go ahead and carry on.

**11:30** — We have let's see.

**11:33** — &gt;&gt; Hello, everyone. Oh, we passed the news

**11:35** — chat and highlights, and I think it's

**11:38** — time that we can bring our partner up.

**11:40** — Um we are

**11:44** — Hello, Jesse. Jesse, look, I know back

**11:45** — in the back, what do you call it, the

**11:47** — green room? We were in the green room,

**11:49** — and because we want to bring you the

**11:51** — absolute best presentation and

**11:52** — experience, you're going to have to bear

**11:54** — with us because we're going to make some

**11:56** — changes. Jesse's going to bring us a lot

**11:57** — of information. I'm super excited to

**11:59** — learn about Cohere.

**12:01** — Uh first of all, you got to clarify for

**12:04** — me cuz I heard I feel like I heard both

**12:05** — your founders say completely different.

**12:07** — Is it Cohere or Cohere?

**12:10** — Cohere. Yes. Cohere. Okay. All right.

**12:12** — Fantastic. But thank you so much for

**12:14** — joining us today, Jesse. Uh before I

**12:16** — start taking you through the slides that

**12:18** — you so generously shared with us, I I've

**12:20** — been super impressed just reading by

**12:21** — about Cohere

**12:24** — barely the past week and week before.

**12:26** — Um and it's super impressive this

**12:28** — approach that you're taking to not only

**12:30** — like competing with the big labs, but

**12:31** — you're building for a very specific

**12:33** — niche and building model infrastructure

**12:36** — that's solely designed for enterprise

**12:39** — AI. So, this is not an afterthought a we

**12:41** — have this model and we're going to also

**12:43** — use it for this. No, the the

**12:45** — infrastructure, the way that it was

**12:47** — constructed, it was solely focused on enterprise.

**12:50** — Um that's amazing. There's not a lot of

**12:52** — folks that are not like out chasing

**12:54** — consumer play right now, so you're

**12:55** — focused on like the real hard problems

**12:56** — and things that can really help

**12:59** — innovation at an enterprise level. So,

**13:00** — before we get started with what you have

**13:02** — to share, I just want to quickly ask,

**13:04** — what was the problem that Cohere solved

**13:05** — that say, "Hey,

**13:07** — this is where we're going to get into

**13:08** — this space, and this is how we can

**13:11** — support enterprises everywhere."

**13:13** — Absolutely. I love that question. So,

**13:14** — when we look at Cohere and when we kind

**13:16** — of started exploring the enterprise

**13:18** — space, I think in particular, one of the

**13:20** — things we're hearing from people is

**13:22** — deploying a model and just getting it to

**13:24** — run basic inference is relatively

**13:26** — trivial, right? Even when you look a

**13:28** — couple years back when we didn't have

**13:30** — all of the amazing tooling that we have

**13:32** — today to do that, it was really

**13:34** — difficult to scale that up to enterprise

**13:36** — needs. And then when they did, the

**13:38** — models, even the strongest models out

**13:40** — there, tended to struggle with the stuff

**13:42** — that enterprise really cared about. When

**13:44** — they had users, when they had people

**13:45** — that were actually going to utilize

**13:48** — these applications, it turns out that

**13:49** — there's a lot of nuance that comes into

**13:52** — it. Whether it be, for example, us

**13:53** — hearing from our healthcare partners

**13:55** — that it's really hard to get certain

**13:57** — things tokenized properly. The

**13:59** — tokenizers just don't recognize things

**14:02** — in our PDFs or other files that we have.

**14:04** — So, with that in mind, it's not just

**14:06** — purely about data privacy and everything

**14:07** — else that I'm going to be talking about,

**14:09** — but making sure that when we have these

**14:11** — models out there, they're genuinely

**14:12** — something that understands the business

**14:14** — context, understands their users, their

**14:17** — documents, everything else. And that

**14:19** — requires a foundational involvement in

**14:20** — that. And that's been one of the

**14:22** — benefits that we've had because we've

**14:24** — made this commitment now years back of

**14:26** — purely engaging with enterprise

**14:28** — customers, and I believe it's led to

**14:30** — some really good models when it comes to

**14:42** — And all of my secrets just now. But

**14:44** — that's amazing. I appreciate that a bit

**14:46** — of context about why uh that's so

**14:48** — important. I think like for some of us

**14:49** — that have been experimenting even at our

**14:51** — own level for our own personal projects,

**14:52** — it makes such a difference when you're

**14:54** — using a model infrastructure that's

**14:56** — dedicated to what it is that you're

**14:58** — working on, right? And different flavors

**15:01** — like your needs by fintech are going to

**15:03** — be completely different that by those of

**15:05** — like medical type organizations. So,

**15:07** — this is a very interesting approach to

**15:08** — the way that you are supporting

**15:10** — enterprises and actually improving the

**15:12** — way that I think everyone is is building

**15:14** — models because it kind of bleeds

**15:15** — through, right? Even though the focus

**15:17** — was for enterprise, it's still I feel

**15:19** — like it works in the advancement of the

**15:21** — way that we're actually applying and

**15:24** — fine-tuning models for specific um

**15:27** — different uh purposes. So, very, very

**15:29** — cool. So, what are we looking at here, Jesse?

**15:33** — So, um for the starters and to kind of

**15:35** — go through this, let's start with just

**15:38** — who is Cohere? Why are we here? When did

**15:40** — we start all of these things? So,

**15:43** — firstly, we are a Canadian AI company.

**15:44** — So, one of the things that we

**15:47** — particularly focus on is we're proud as

**15:48** — well about the fact that we are

**15:51** — Canadian. Um and our focus obviously is

**15:52** — on enterprise AI, delivering value to

**15:55** — customers around the world from NAMER to

**15:57** — EMEA and all the way to Asia with

**16:00** — customers and GTM partners all over the

**16:02** — globe. We've been in business since

**16:05** — 2019, give or take, and have grown to

**16:08** — over 500 employees during this time, and

**16:10** — expansion is happening even as we speak.

**16:12** — I think we just crossed the 600 employee

**16:14** — line, actually, so this is already

**16:16** — outdated. With that in mind, by the way,

**16:19** — our careers page is booming. So, in case

**16:21** — you are a talented engineer looking for

**16:24** — a next play, give us a shout. So, that's

**16:25** — our sales, and then on the screen you'll

**16:28** — also see some of the partners that we

**16:29** — work with all across the globe as well

**16:32** — to give you an idea of not only the

**16:34** — geographical split of the customers that

**16:36** — we have and the partners, but also the

**16:38** — actual industry split that you will see

**16:40** — here in your screen. An incredible

**16:43** — variety of logos there.

**16:44** — Uh definitely speaks broadly of the

**16:46** — capabilities of the models. Um

**16:49** — here this is the the whole meat of it,

**16:50** — right? Like what challenges were those

**16:52** — organizations facing before Cohere existed?

**16:56** — Absolutely. And obviously, there's the

**16:58** — usability aspect, but before we even

**17:00** — take a look into it, the customers that

**17:03** — we talk to often are incredibly

**17:06** — concerned about privacy. Wherever you

**17:07** — look, privacy is something that is

**17:09** — really hard to guarantee, especially if

**17:11** — you're using proprietary model providers

**17:13** — with relatively

**17:16** — um let's just say non-suitable data

**17:20** — privacy um policies and all of this. So,

**17:22** — the first starting point for us is that

**17:25** — we have heard front and center that you

**17:26** — need a private solution. Data

**17:29** — sovereignty, compliance, and security

**17:31** — are the keys to ensuring that your data

**17:34** — remains secure and truly yours.

**17:36** — But there are other people that can

**17:38** — provide this. So, even if that can be

**17:40** — provided, there's just no point in

**17:42** — deploying a solution to production that

**17:44** — just isn't accurate and efficient across

**17:47** — the stack. For this, you need strong

**17:49** — models that have the required hardware

**17:51** — capacity, come at low cost of ownership,

**17:54** — while providing a great, fast user

**17:55** — experience. So, that's where you need to

**17:58** — find also, for enterprise users in

**18:00** — particular, models that fit into this

**18:03** — nice middle ground of they're as good as

**18:06** — you can get, but you also don't need an

**18:08** — absolute node full to deploy these

**18:10** — models at scale. So, we kind of try to

**18:16** — That's super interesting. I watched one

**18:18** — of the talks, and folks, I got to share

**18:19** — these links because I watched one of I

**18:20** — think it was one of your co-founders

**18:22** — speaking at Bloomberg, but the

**18:24** — conversation circled around the fact

**18:25** — that like not all enterprise have like this

**18:30** — vast abundance of GPUs, and how it is

**18:32** — important to hone in to where actually

**18:34** — you can fit any model in I think it's is

**18:36** — it a one or two GPUs that's part of like

**18:38** — the core idea?

**18:40** — Correct. Yes. Yeah, no, fascinating,

**18:42** — fascinating. Okay, should I move to the

**18:44** — next slide?

**18:45** — Yeah, absolutely.

**18:52** — And if we look at this slide, I think

**18:54** — this really kind of like dives a bit

**18:56** — deeper into the data privacy and

**18:57** — security aspects. On the data privacy

**18:59** — front, we have spent a considerable

**19:01** — amount of time just ensuring that we are

**19:04** — compliant and a secure service provider.

**19:06** — Looking at EMEA and the EU specifically,

**19:08** — the importance is even greater with how

**19:10** — the regulatory landscape has really been

**19:12** — developing over the past couple of

**19:15** — years. As the most recent example of our

**19:17** — devotion to this, Cohere has signed the

**19:20** — EU AI Act Code of Practice for general

**19:22** — purpose AI models, building on a

**19:24** — long-standing track record for AI

**19:27** — development globally, which also

**19:28** — includes some of the other things that

**19:29** — we have done such as signing of the

**19:32** — Seoul Frontier AI Safety Commitments,

**19:34** — Seoul Business Pledge, Canada Voluntary

**19:36** — Code of Conduct, and the Hiroshima Code

**19:39** — of Conduct for organizations developing

**19:42** — advanced AI. Our commitment to safe and

**19:44** — secure AI is described in our Secure AI

**19:47** — Frontier Model Framework, which I'll be

**19:48** — happy to link for anyone that is curious

**19:50** — about this.

**19:52** — Um and is obviously backed by achieving

**19:57** — the ISO standards 27001 and 42001.

**19:58** — So, I think this is one of the other

**20:00** — things that I want to highlight in here

**20:02** — when we talk about privacy more, um,

**20:04** — as [clears throat] a general concept,

**20:06** — which is that you need to put, um, your

**20:08** — mouth where your money is, if I may. So,

**20:09** — basically, these are really just

**20:11** — showcasing that we take this really

**20:13** — seriously and try to make sure that

**20:15** — they're certifiable anywhere where

**20:16** — you're going to be deploying these

**20:19** — models. Absolutely. You have to, I

**20:22** — guess, not only earn but maintain the

**20:24** — trust of all your customers. And when

**20:25** — you have highly regulated industries,

**20:28** — it's not a you can't just kind of be

**20:31** — compliant. You have to be compliant. So,

**20:33** — this is fantastic. Uh, that's an

**20:35** — impressive list of, uh, compliance

**20:37** — certifications. All right, let's learn a

**20:39** — little bit about, uh, I guess, the

**20:41** — foundational large language model

**20:44** — providers. Absolutely. So, basically,

**20:45** — when you look at our family of models,

**20:47** — this essentially breaks down into three

**20:49** — different really big families of models

**20:51** — with a slight addition that I'll talk

**20:53** — about in a moment. But, starting with

**20:55** — the side of the aisle that I'm on, uh,

**20:57** — myself, which is our generative model.

**20:59** — So, Command is our family of generative

**21:02** — models. And the idea of them is really

**21:05** — to empower all of the enterprise users

**21:07** — with models that they care about. Um,

**21:09** — so, as I kind of mentioned earlier, we

**21:11** — try to find models that are able to be

**21:13** — hardware efficient. So, talk about

**21:15** — Command, the latest Command model that

**21:17** — you will find, for example, in Azure

**21:20** — services at the moment is going to be

**21:22** — Command A. Command A is particularly

**21:24** — good in the sense that it not only

**21:27** — balances out being really competitive in

**21:29** — the landscape, but at the same time, it

**21:32** — can fit down into two GPUs. So, we're

**21:34** — talking about 2x A100, 2x H100.

**21:36** — Comparing it to some of the other

**21:38** — deployment solutions that you see where

**21:40** — the standard tends to usually be four or

**21:43** — even up to eight GPUs, that gets so much

**21:45** — more expensive when you, say, try to

**21:47** — serve that application over to 10,000

**21:49** — users with high levels of concurrency.

**21:51** — But, I'll talk a bit more about Command

**21:54** — models in just a bit there.

**21:56** — On the other side of this, we also have

**21:58** — state-of-the-art search and retrieval

**22:00** — models. Embedding models probably quite

**22:02** — familiar to a lot of yourselves, but the

**22:05** — idea being that you can take strings or

**22:07** — documents or something that you're going

**22:08** — to be storing in your knowledge base,

**22:11** — and we can find an embed semantic

**22:13** — meaning to those, which should mean that

**22:15** — if you have a really good embedding

**22:17** — model, things that are related to user

**22:19** — queries are going to be something that

**22:22** — we can index and find very, very easily.

**22:24** — But, then there's also rerank models.

**22:26** — And I'll be completely honest, when I

**22:28** — joined Cohere, this was a relatively

**22:30** — new, um, type of model for me. I was

**22:32** — like, what in the world is rerank? But,

**22:34** — rerank is one, if there's one takeaway

**22:36** — that I can

**22:38** — tell to people from this is that

**22:40** — definitely do try to add a reranking

**22:41** — component, particularly if you're

**22:44** — building retrieval augmented generation

**22:47** — pipelines or agentic applications,

**22:48** — because when you think about these

**22:50** — embedding models, and they go over and

**22:52** — they might index millions of documents

**22:54** — and actually put them into an embedding

**22:57** — space, you might find, say, a cluster of

**23:00** — a hundred relevant data points that you

**23:02** — have to yourself.

**23:04** — Going over and finding the thing that

**23:06** — you care about is going to be incredibly

**23:08** — onerous. So, what the rerank model

**23:10** — essentially does is that it tries to

**23:12** — take those data points and rank them

**23:15** — based on the relevance to the query that

**23:16** — the user had. So, it's essentially, you

**23:18** — can think of it as a the second step

**23:21** — after embedding model has run, which can

**23:22** — find the most relevant documents. And if

**23:24** — we translate this back to the actual

**23:27** — value that you get, usually, the actual

**23:30** — end-to-end speed of your agent being

**23:33** — able to execute a query, for example, is

**23:35** — massively different when you're able to

**23:37** — add that reranking step back in. So,

**23:39** — give it a try and let us know. I'd be

**23:41** — very curious to know if this changes the

**23:42** — experience for yourself. At least for

**23:45** — myself building agentic applications,

**23:48** — this has been an absolute game changer.

**23:50** — This is definitely a new concept for me.

**23:53** — Um, and I've also, I guess, recently

**23:55** — found out that rerank 4.0 is available

**23:58** — in Azure. So, you have made it available

**23:59** — to our customers.

**24:00** — Uh, what does that mean for an

**24:03** — enterprise? Like, why does it matter if

**24:04** — it's native to Azure versus, like,

**24:08** — someone calling the API?

**24:09** — Yeah, that's a great question. So,

**24:12** — Azure, in particular, provides a really

**24:14** — good value add from two perspectives.

**24:16** — So, one is you can still stick true to

**24:19** — our data privacy in here. So, we make

**24:21** — sure that when these are deployed, the

**24:23** — actual tenants itself is not overseen by

**24:25** — Cohere. We cannot access your data in

**24:27** — any way. So, you're able to make it

**24:29** — completely secure within your own

**24:31** — application layer and just make sure

**24:33** — that the hosting itself happens on the

**24:35** — Azure side and you can run inference in

**24:37** — there. But, then we get to the second

**24:39** — part, which is really the Azure value

**24:41** — add. I don't know if any of you have

**24:43** — noticed, but GPUs are quite expensive.

**24:45** — They're quite hard to actually maintain.

**24:47** — So, when it comes down to actually

**24:50** — having to own the hardware yourself, no

**24:52** — matter what the location is, you will

**24:54** — start finding these problems that start

**24:57** — popping up. Hardware is down or there's

**24:58** — going to be issues where, say, if you have

**25:01** — three or four nodes and one of those

**25:03** — goes down, your production

**25:07** — might actually suffer really badly. What

**25:08** — the benefit that you get from here is

**25:10** — when you actually have the hosted

**25:12** — hardware from the other side, while you

**25:14** — still tap and reap all of the benefits

**25:16** — that we're able to provide as Cohere,

**25:18** — you basically save a lot of the hassle

**25:19** — of that

**25:21** — exist and you can focus more on your

**25:23** — application layer rather than the other

**25:26** — stuff that might take engineering teams

**25:27** — millions of dollars to actually solve

**25:29** — properly. So, that's where the

**25:31** — combination of Cohere on Azure is an

**25:34** — absolute no-brainer, if I may. That's

**25:36** — amazing. That's amazing. I need to dig

**25:37** — into a little bit more into that,

**25:39** — because what an accessible way for

**25:41** — anyone at the enterprise level or even

**25:42** — for any of us who's thinking about how

**25:44** — we can better utilize the space that we

**25:47** — do have. I definitely don't have GPUs

**25:49** — to host a lot of the experiments that I

**25:50** — want to run. So, uh, it sounds like

**25:52** — rerank will be like a really, really

**25:55** — good solution for that. And then, I

**25:57** — think you have a project, uh, or a

**26:00** — product update, uh, transcribe that you

**26:02** — wanted to share a bit about. Let's go to

**26:03** — that slide so we can take a look,

**26:06** — because this just sounds fascinating.

**26:08** — Indeed. So, um, this is the one that I'm

**26:10** — really excited about, folks. We've been

**26:13** — working on, um, automated automatic

**26:15** — speech recognition for a very long while

**26:17** — in the background. And one thing to talk

**26:19** — about when it comes to our product

**26:21** — philosophy is we'd rather take the time

**26:24** — and get it right than ship something

**26:26** — that when you actually try it, you

**26:28** — immediately go, "What in the world is

**26:30** — Cohere doing?" And this particular

**26:32** — model, I've tested the absolute

**26:34** — ever-living won't curse there. I've

**26:37** — tested it very extensively. And all I

**26:39** — can say is it really does deliver. So,

**26:41** — there's a couple of really interesting

**26:42** — things about Transcribe that I want to

**26:45** — point out. One of them is that it is

**26:47** — state-of-the-art. So, was immediately

**26:49** — able to climb to the number one on

**26:52** — English on the HF ASR board at the time

**26:54** — of release. But, outside of that,

**26:55** — there's a couple of other interesting

**26:57** — things to highlight there. As you heard

**26:59** — in the earlier video, we really wanted

**27:02** — to emphasize throughput and making sure

**27:04** — that it's able to be hosted with very

**27:06** — lightweight hardware. So, when it comes

**27:08** — to throughput, we essentially boast a

**27:10** — very, very impressive number when it

**27:12** — comes to this and often beating some of

**27:15** — the competitors that we have by 2x, 3x.

**27:17** — So, you can build applications that are

**27:19** — incredibly lightning fast when it comes

**27:22** — to transcription models. But, also on

**27:25** — the same time, this our first venture

**27:29** — into the world of open source licensing.

**27:30** — So, in the past, what we've done is

**27:32** — we've released some of these

**27:36** — applications with, um, a CC BY-NC

**27:37** — license, which essentially is a

**27:39** — non-commercial license. And if you want

**27:41** — to test any of our models out, by the

**27:44** — way, they are available on Hugging Face

**27:46** — as well, just in case you want to, say,

**27:48** — see what the local deployment would look

**27:50** — like before you go out and try that more

**27:53** — extensively on, say, Azure. But,

**27:55** — Transcribe was first time that we

**27:56** — actually released it on a full Apache

**27:59** — 2.0 license. So, definitely do go and

**28:01** — try it out. It is also multilingual,

**28:04** — supporting 14 languages. And I can even

**28:06** — say with my very heavily accented

**28:09** — German, was able to catch it quite well.

**28:11** — So, um, should be quite a fun thing to

**28:14** — try out and see where you can add in,

**28:16** — um, possibly even further value to your

**28:18** — applications by enabling voice

**28:20** — dictation. That is incredible. And what

**28:22** — an amazing value add. I've recently been

**28:24** — experimenting with this, the power of

**28:25** — voice. I think ever since we have like

**28:27** — really amazing speech-to-text tools,

**28:31** — like, rarely ever do I type. And it's

**28:32** — terrific that you actually made this

**28:34** — available open source. And for folks who

**28:36** — are thinking like, where would that be a

**28:38** — practical use case? Like, think of all

**28:40** — the applications of like medical

**28:42** — transcription. Like, a lot of folks are

**28:44** — reading out logs as they're updating

**28:47** — charts. Uh, well, you need a safe and

**28:49** — secure environment for this to be

**28:50** — processed. And you need a, uh, agent

**28:52** — that can actually transcribe, like, say,

**28:54** — live calls or,

**28:56** — uh, summaries. So, there's a ton of

**28:58** — applications here. I appreciate y'all

**29:00** — making it open source, so that's fun.

**29:02** — That's fantastic. I'm going to find the

**29:03** — link to it so we can share it with

**29:04** — folks. There's a lot of folks who like

**29:06** — really appreciate open source here. So,

**29:07** — I'm sure they'll be eager to go and

**29:10** — experiment. And then, why not, uh, give

**29:12** — a contribution or two. And this is brand

**29:14** — new, right? Like, this was March that

**29:16** — you released the, uh, the model itself,

**29:18** — right? Like, March of this year.

**29:20** — &gt;&gt; Correct. Yes, this was March 26th. So,

**29:22** — this also very hot off the press, which

**29:24** — is the timing for this webinar couldn't

**29:26** — have been more perfect, because also

**29:28** — gave me time to make sure that I can go

**29:30** — and test it out, uh, before I go and

**29:33** — tell you all about these things. But,

**29:34** — it's definitely worth giving it a shot,

**29:36** — so do. And as, um, Andre mentioned,

**29:38** — obviously, a lot of different use cases

**29:40** — that this provides, um, ability to do.

**29:41** — The other one that I would want to

**29:44** — highlight is things like audio rack. So,

**29:47** — for example, actually being able to

**29:49** — access audio in your rack system and

**29:51** — being able to index those because you

**29:53** — can now transcribe them as well

**29:54** — asynchronously and do a lot of these

**29:56** — other things. So, there's a lot of

**29:57** — different creative solutions this

**29:59** — enables and if you're curious to hear

**30:01** — more, please do ask and I'd be more than

**30:03** — happy to provide any further details on

**30:04** — some of these, but it is definitely

**30:07** — something that just amps up the value

**30:09** — all over. Let's send you had me at with

**30:11** — my thick accent. &gt;&gt; [laughter]

**30:13** — &gt;&gt; I need a model that's going to perform

**30:15** — for mine, too. So,

**30:18** — I'm sold. I'm sold. It's amazing.

**30:19** — All right, let's see what else you have

**30:21** — for us today, Jesse. I think Oh, and

**30:22** — this is such an interesting graphic and

**30:25** — I hope that folks can see it well.

**30:27** — Can you explain a bit about how actually

**30:29** — this Cohere models

**30:30** — What What are they doing? What's the

**30:33** — sauce here that's making it so scalable?

**30:35** — Absolutely. So, this is the last of the

**30:36** — slides, but this really to kind of like

**30:39** — try to dig into the actual way that

**30:41** — these models work in unison and why

**30:42** — having a strong model at all of these

**30:45** — steps is so important. So, in here you

**30:47** — will see a standard retrieval augmented

**30:50** — generation pipeline. And one of things

**30:52** — that I want to highlight in here is

**30:54** — specifically where the re-rank model

**30:56** — comes in as well as how the different

**30:58** — models kind of act in the different

**31:01** — layers all over here and how this also

**31:03** — enables you to test out different parts

**31:04** — of this. So, for example, if your

**31:06** — experience with the command models isn't

**31:08** — what you were expecting, you can always

**31:09** — go ahead and try some of the other

**31:11** — models that are available on Azure today

**31:13** — and just see how they actually work out

**31:15** — if you were to say used with our embed

**31:17** — and re-rank models. But, the whole idea

**31:20** — being modifiability and being able to

**31:23** — just adapt them to your own pipelines.

**31:24** — But, to really briefly give you an

**31:25** — overview of this essentially what you'd

**31:28** — have in a standard system is that you

**31:29** — would go ahead and you would have your

**31:32** — company knowledge base. The embedding

**31:34** — model itself would go over that and make

**31:35** — sure that there those are all

**31:38** — represented in an embedding space before

**31:42** — a user itself starts a conversation. And

**31:43** — you'll see in here there's a chat

**31:45** — history that might proceed when the

**31:47** — command model then goes in and takes an

**31:50** — actual query. When it needs to interact

**31:53** — with anything that your company has

**31:55** — the embedding model step in and the

**31:56** — embedding models in particular I want to

**31:59** — highlight are not just for text. So, as

**32:01** — I mentioned, we already do have audio

**32:03** — support there. We do support actual

**32:06** — PDFs, graphs, any type of visual

**32:08** — documents that you may have. Essentially

**32:10** — trying to make sure that it is going to

**32:12** — be agnostic to the types of files that

**32:13** — you have

**32:16** — in your internal knowledge bases. And

**32:17** — then it goes through the search function

**32:20** — itself and then goes to re-ranking. And

**32:22** — as I kind of talked about this before,

**32:24** — re-ranking in particular adds that huge

**32:27** — value add of making sure that the time

**32:30** — to actual completion for the model goes

**32:32** — down massively because now imagine a

**32:34** — situation where again you have like

**32:36** — maybe a hundred possibly relevant

**32:39** — documents and the model needs to go and

**32:41** — say reason over all of them and try to

**32:43** — look up on Wait, this doesn't seem very

**32:45** — relevant. This seems a bit more, but

**32:47** — let's go through the rest of them. If

**32:49** — you can tone that down massively by

**32:52** — already adding a step that in a very

**32:54** — lightweight and quick fashion is able to

**32:56** — rank those files for yourself

**32:58** — it will usually not only make the

**33:01** — experience for the end user much faster,

**33:03** — but also make sure that the overall

**33:05** — accuracy is higher because the

**33:07** — likelihood of your relevant document

**33:09** — being there increases massively. And

**33:12** — then it goes back to the results being

**33:13** — there to share the developer being able

**33:16** — to work through them and being served to

**33:19** — the actual end users in here. All this

**33:20** — to kind of highlight there's multiple

**33:22** — different moving components that come

**33:24** — into play when it comes to a rack

**33:25** — application or something similar. Now,

**33:28** — with agentic applications, a lot really

**33:30** — hasn't changed. So, essentially what

**33:32** — you'd add in here is tools or any of the

**33:34** — other connectors that you may want to

**33:36** — have just to make sure that the agent is

**33:38** — able to autonomously operate within that

**33:40** — space, but that's where these different

**33:43** — models are very much intended to have

**33:45** — heavy degrees of interplay with each

**33:47** — other, but also be completely modifiable

**33:50** — pipeline-wise. So, as I mentioned, if

**33:52** — you're eager to test out new models to

**33:54** — plug in, anything and everything should

**33:56** — be interoperable with what you find out

**33:58** — into the market. So, go and test it out,

**34:01** — see how you can tweak things there, but

**34:02** — they should be the recipe for making

**34:04** — sure that you build an actually scalable

**34:08** — production grade rack pipeline.

**34:10** — Fantastic. Thank you so much. This has

**34:12** — been one of the best explanations of how

**34:13** — rack works

**34:15** — that I've heard. So, thank you for that

**34:17** — graph. Maybe there's an opportunity for

**34:18** — us to share that particular graphic. I

**34:20** — think people would like definitely find

**34:22** — a lot of value on it. And let's see,

**34:24** — what is this security and enterprise

**34:26** — obviously such an important and timely

**34:28** — topic. Besides having the tools that are

**34:30** — going to reduce latency, make people get

**34:31** — the things that they want when they want

**34:33** — it quickly, it needs to be done in a

**34:35** — safe manner. So, can you talk us through

**34:36** — this one?

**34:38** — Absolutely. So, I I think one of the

**34:40** — things to highlight in here is

**34:41** — particularly kind of going back and

**34:44** — wrapping up the What does it actually

**34:48** — look to solidify that enterprise value

**34:49** — add and what enterprise users are

**34:51** — looking, which is they need the private,

**34:53** — performant, and efficient solution. And

**34:56** — if you're looking over to consumer AI or

**34:57** — you're looking at some of these other

**34:58** — model providers that are out in the

**35:01** — market, they usually provide greatly

**35:02** — performant models. And that's something

**35:04** — that I can't take away from them. We've

**35:05** — seen some absolutely amazing

**35:08** — advancements in the last few months in

**35:10** — particular. 2026 has turned out to be a

**35:12** — crazy year thus far when it comes to

**35:15** — model releases. But, at the same time,

**35:16** — when you look at it, if you want

**35:18** — something that is private, performant,

**35:21** — and efficient, Cohere and particularly

**35:24** — Cohere on Microsoft is the solution that

**35:27** — you want to go for. Keep your data safe,

**35:29** — get into actual efficient solution so

**35:31** — that you're not stuck on agents that

**35:32** — take 10 minutes to answer even the

**35:34** — simplest queries, and that are

**35:36** — performant, that are able to solve

**35:39** — enterprise problems in real time. That's

**35:40** — what you need. And that's where the

**35:42** — Cohere Microsoft partnership in

**35:44** — particular really solidifies that for

**35:46** — anyone aspiring to build out something

**35:48** — new. So, go and try out their models on Foundry.

**35:51** — They're available today, so please make

**35:53** — sure to give them a try. And if you have

**35:54** — any questions, if you have any feedback,

**35:56** — we'd absolutely love to hear that and

**35:58** — make sure that you have a brilliant time

**36:00** — building out some amazing AI

**36:02** — applications with them.

**36:03** — Well, so here's the homework for

**36:05** — everyone who's watching and you have not

**36:07** — heard of Cohere, you have not given any

**36:09** — of the models a try. Like go on and

**36:10** — play. They're available now on Foundry.

**36:13** — Like this command, embed, and re-rank

**36:16** — stack like makes perfect sense. And now

**36:18** — with transcription, you're opening up

**36:20** — voice workflows, which is like a whole

**36:23** — new paradigm. So, very exciting to see

**36:25** — not only Cohere moving into Azure, but

**36:28** — like being able to be a partner for

**36:30** — enterprise and take

**36:32** — security and compliance so important.

**36:34** — So, that's fantastic. Jesse, thank you

**36:36** — so much for coming by today and sharing

**36:39** — Cohere and specifically the country the new

**36:41** — transcription model. I'm super excited

**36:43** — about that being open source, too. Where

**36:45** — can people get a hold of you if they

**36:46** — want to learn more about Cohere? I will

**36:49** — share I have a slide with your

**36:51** — Cohere blog, which folks, I read a lot

**36:53** — of blogs. I write a lot of blogs and

**36:54** — it's very hard to write about these

**36:56** — things and this is a very good,

**36:59** — well-written, and interesting blog. So,

**37:00** — go ahead and scan that QR code so you

**37:02** — can learn more about the models. But,

**37:04** — what can people learn more? And if they

**37:05** — want to follow you, where could they do that?

**37:08** — Absolutely. Firstly, Andrea, thank you

**37:10** — so much for having me. It has been such

**37:12** — a pleasure to come here talk today.

**37:15** — So, definitely do check out our website.

**37:16** — As Andrea mentioned, we have

**37:17** — [clears throat] a blog, but they talk a

**37:19** — lot more as well about our offerings.

**37:21** — So, do go ahead out over there. For

**37:23** — myself, the best place to actually reach

**37:25** — me is LinkedIn. So, if you go in and

**37:27** — search Jesse Woolman, you'll be able to

**37:30** — find myself and I'd be happy to chat

**37:32** — with any of you and help out in your

**37:33** — journey just to make sure that you have

**37:35** — the most amazing time building out

**37:37** — whether it be with our solutions or

**37:39** — something else on Azure. Give me a shout

**37:40** — anytime and I'd be more than happy to

**37:42** — help out or just have a chat in general.

**37:44** — So, drop me a follow, drop me a

**37:45** — connection request and I'll be more than

**37:47** — happy to connect with yourselves there,

**37:49** — but thank you once again. Hugely

**37:50** — appreciate the opportunity to speak here

**37:52** — today. Thank you so much, Jesse, for

**37:54** — being here. Thank you and hopefully

**37:55** — you'll come back. This won't be the last

**37:56** — time that we see from you, but I

**37:58** — appreciate you taking the time. Yeah,

**37:59** — thanks for taking the time to break this

**38:02** — down and the straight talk, honestly.

**38:03** — Thank you for being here. Bye, Jesse.

**38:07** — Brilliant. Thanks very much. Cheers.

**38:08** — That was very, very interesting. I

**38:09** — learned a lot more about Cohere than I

**38:12** — knew before we got started. Thank you

**38:14** — everyone for watching today and a

**38:15** — special thanks to Jesse for taking the

**38:17** — time to like break it down. And folks,

**38:19** — for those who are watching, definitely

**38:21** — take Take a look at the blog. Take a

**38:24** — look at the new transcription model, but

**38:25** — one thing that I hope you can take away

**38:27** — is that you don't really need magic. You

**38:29** — need the right tool for the right job

**38:30** — and that infrastructure that you can

**38:32** — trust is so important. And partners like

**38:34** — Cohere that can help you

**38:36** — think through the trade-offs, right? And

**38:38** — Cohere is doing the tough work of

**38:40** — creating a place for you to access all

**38:43** — that via Azure. So, that's amazing.

**38:45** — Thank you all so much for being here.

**38:46** — Let's see, I think I got a couple more

**38:48** — slides that I need to go through because

**38:50** — this is supposed to be the last episode

**38:52** — of the season, but guess what? You get a

**38:54** — bonus episode. So, there is a bonus

**38:57** — episode coming up next week where you

**39:00** — will have a amazing session about

**39:02** — building Microsoft Foundry agents within

**39:05** — VS Code. So, now you know what models

**39:06** — you want to use,

**39:09** — here's how to do it. Be sure to RSVP for

**39:12** — that. Register next week so you can join

**39:14** — Mr. Lee and Miss Shaw. And this is going

**39:17** — to be hosted by Carlota. So, don't miss

**39:19** — it. And then remember that following

**39:23** — that Mondays, we actually have AMAs on

**39:25** — Fridays. So, this Friday there isn't

**39:27** — one, but next Friday there will be one

**39:29** — that is going to have these subject

**39:31** — matter experts that

**39:33** — you saw in the previous slide and you

**39:34** — get to come and actually interact with

**39:36** — the team. If you are not a part of this

**39:39** — Discord, join this Discord channel. It

**39:41** — is hopping. There's a lot of activity

**39:43** — going on there. A lot of very, very

**39:46** — smart people. So, join up. Even if you

**39:47** — never use any of the Foundry models and

**39:49** — you just start in your experimentation

**39:51** — to building with agents. You're like a

**39:54** — transcribe model. That sounds fun. Well,

**39:55** — that's the right place for you to be.

**39:57** — So, go ahead and join the Discord. Don't

**40:00** — forget to watch live every Mondays.

**40:01** — There will be another season of Model

**40:04** — Mondays coming up. And then, you can

**40:06** — always go back into the GitHub

**40:09** — repository and Miss Nithya does an

**40:10** — amazing job at keeping everything super

**40:12** — tidy and organized so you can see all

**40:14** — the resources from each episode. And if

**40:15** — this is the first time that you're

**40:16** — tuning in,

**40:18** — thank you so much for being here. It's

**40:20** — been a true honor and pleasure. I took a

**40:22** — quick scan through the chat and I didn't

**40:24** — see any pressing questions. But like

**40:26** — Jesse so generously volunteer, if you

**40:29** — want to connect with Jesse via LinkedIn,

**40:32** — definitely send them send I I can uh say

**40:33** — he replies to his LinkedIn requests cuz

**40:35** — I sent him one myself yesterday. So,

**40:38** — I'll go ahead and share that link now.

**40:41** — Uh let me see if I can share it via both

**40:44** — the YouTube and the LinkedIn streams.

**40:46** — So, please send them a a request, follow

**40:47** — him, and then if you have questions

**40:50** — about Copilot for sure, that's a good

**40:51** — place to reach out. If you have any

**40:54** — questions about GitHub Developer Days,

**40:56** — the Copilot Developer Days, I shared

**40:58** — earlier the list of all the locations.

**40:59** — Um I think we're going to be doing this

**41:01** — again. So, definitely check it out. And

**41:02** — if you're one of those people that are

**41:04** — like really would love to organize this

**41:06** — in community, um this might be a good

**41:08** — opportunity for you to

**41:10** — share what you know about Copilot and

**41:12** — actually get some cool swag and a fun

**41:13** — opportunity to share and learn and grow

**41:15** — together. So, thank you all so much for

**41:17** — being here today. Thank you Anna for

**41:19** — producing this show and Jesse for being

**41:21** — our subject matter expert and our

**41:24** — partner. I hope to see you again.

**41:26** — Hopefully I did a good enough job to

**41:27** — invite me to host again.

**41:29** — But thank you all so much for being

**41:30** — here. I appreciate you. Thanks for

**41:32** — joining Model Mondays. Remember there's

**41:34** — tons of programming both in the Reactor

**41:36** — channels and the GitHub YouTube. Yes, we

**41:38** — have our own YouTube channel. So, go on

**41:40** — and subscribe to that so you can keep on

**41:41** — learning. Thank you for being here.

**41:50** — Thank you all for joining and thanks

**41:53** — again to our speakers.

**41:55** — This session is part of a series.

**41:58** — To register for future shows and watch

**42:00** — past episodes on demand, you can follow

**42:04** — the link on the screen or in the chat.

**42:05** — We're always looking to improve our

**42:08** — sessions and your experience.

**42:09** — If you have any feedback for us, we

**42:12** — would love to hear what you have to say.

**42:14** — You can find that link on the screen or

**42:15** — in the chat.

**42:20** — &gt;&gt; [music]
