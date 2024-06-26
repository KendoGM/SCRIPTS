async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SPIDER-MAN 3


It's me, Peter Parker.

Your friendly neighborhood... you know.

I've come a long way from being the boy who was bit by a spider.

Back then, nothing seemed to go right for me.

Now...

- Wow, look, it's Spider-Man!

people really like me.

Hey, stick around! It's gonna start again in a couple minutes.

- Yeah... - That's OK.

The city is safe and sound.

Guess I've had something to do with that.

My uncle Ben would be proud.

I still go to school,

top of my class.

Now, the Hamiltonian shows us

that the energy levels are perturbed by the electric field.

From the form of this matrix,

we can see...?

Miss Stacey?

- That only the m=0 quantum states are affected.

Correct! Good work, Miss Stacey.

Parker.

You got something to add?

No, sir.

And I'm in love

with the girl of my dreams.

Hi. Um, Miss Watson left a ticket for me?

Peter Parker.

Excuse me. Sorry. Thank you.

It's my girlfriend!

Harry!

I need to talk to you.

Explain things.

Tell it to my father.

Raise him from the dead.

I'm your friend, Harry.

I cared about your father.

MJ.

Peter.

Was I good?

- Good?

You were great. You were...

- You say great?

I love my flowers. They're beautiful.

And those are from Harry.

Was he here tonight?

- Yeah, I ran into him outside.

What's with you guys anyway?

It's complicated.

Tell me again, was I really good?

I was so nervous.

My knees were shaking.

Your knees were fine.

- The applause was not very loud.

Yes, it was.

It's the acoustics.

It's all about diffusion.

It keeps the sound waves from grouping.

You see, when the sound waves, they propagate, then it's like an...

- You are such a nerd.

Did you see that one?

You know what?

I'd like to sing on stage for the rest of my life

with you in the first row.

I'll be there.

Tell me you love me.

I love you.

I love you so much.

I always have.

You can't hide here, Flint.

I'm just here to see my daughter.

You are an escaped convict.

The cops are looking for you.

You're not getting near her.

You're nothing but a common thief.

You maybe even killed a man.

It wasn't even like that.

Wasn't.

I had good reason for what I was doing.

And that's the truth.

You and the truth, sitting in prison, having three meals a day together.

I live in a prison. It's a great truth.

And that is the truth that you left behind.

Right there in that bedrooom.

I missed you.

I missed you too, Daddy.

I promise

I'll make you healthy again.

Whatever it takes.

I'll get the money.

- You get out of here.

Now.

I'm not a bad person.

Just had bad luck.

Peter, what is it?

It's MJ...

I'm gonna ask her to marry me!

Oh, Peter! Oh!

The day that uncle Ben asked me to marry him,

he was so scared and excited.

And very young.

And I loved him so fiercely.

Then you said yes, right?

No. I wanted to say yes, but I said no.

I wasn't ready,

neither was he.

So we took our time.

Looked forward to it.

Didn't want to run into something with nothing to count on but love.

A man has to be understanding

and put his wife before himself.

Can you do that, Peter?

Yeah. I think I can.

Then you have my blessing.

I hope you've considered a proper proposal.

Your uncle had it all planned.

He took me to the beach one Sunday.

He was a knockout in his bathing suit.

And I, I didn't look too bad myself.

We were very good swimmers.

It was a beautiful day,

and he said:
"Let's swim to the island."

And at the island,

we found a perfect spot by an old tree,

and we lay down and looked up at the sky.

And then he said, "Close your eyes, May."

And I did. And then he said, "Open them."

And I did.

And he was holding this ring.

Dazzling, in front of me.

I thought it was the sun.

We'd be married 50 years

come August... if...

So.

I hope you make it very special

for Mary Jane.

Do something she'll never forget.

Give her this.

Come on.

Take it.

Harry.

- You knew this was coming, Pete.

Listen to me! I didn't kill your father!

He was trying to kill me. He killed himself.

Shut up!

I'm still here, Peter!

Hate those things.

Harry.

Harry.

Harry!

Oh my God.

Harry!

Come on!

God!

- And clear!

No response.

- Recharge. Let's go again.

Clear!

No response.

We charge it one more time. And clear!

Captain Stacey.

What's this?

- Flint Marko, the guy we tied to the Ben Paker homicide.

What about him?

- He just broke out of Rikers.

And?

- He's on the run.

He's in the marshlands. I think we got him.

There he is!

"DANGER

PARTICLE PHYSICS TEST FACILITY

KEEP OUT"

Euton, take the west side. Tommy, take the east.

Where'd he go?

That's it. It's charged.

- Right.

Donnie, we got a little fluctuation on 1.

There's a change in the silicon mass.

It's probably a bird. It'll fly away when we fire it up.

Initiating demoleculisation.

How is he?

- He's gonna be OK.

But there's been some memory impairment.

Particularly his short-term memory.

Right now, he can't remember the accident

or anything that happened to him recently.

Is it permanent?

It could be.

Only time will tell.

He's awake if you want to see him.

Uh-- maybe I should wait.

Nah, it's fine. Just keep it brief. Allow him to rest.

Hey, buddy.

- Hey.

Hit my head.

Yeah.

Doctor said I was in an accident. Hit and run.

I don't remember much of anything.

My father--

he died, right?

This is all so weird.

Hi. I got here as fast as I could.

I know that face.

How are you doing?

I don't know.

Last thing I remember, I was falling...

somewhere.

You're still fine.

We love you, Harry.

It feels like

somehow I've been gone for a really long time.

Now I'm back home.

It's good to have you back.

I'm sorry, I'm gonna have to ask you guys to scoot, OK?

OK.

- All right, thank you.

Well, I'll see you tomorrow.

Yeah, great.

I think he's gonna be fine.

Think so.

And you guys seem great.

- Yeah.

You have lovely friends.

My best friends.

I'd give my life for them.

Yeah?

- It's me.

- Oh! Hey!

You know I can't open the door.

It's stuck again?

Come on and help me.

I'm coming.

The review.

- Oh!

The hated it. They hated me.

Well, they can't hate you.

"The young Miss Watson is a pretty girl.

"Easy on the eyes, but not on the ears.

"Her small voice didn't carry past the first row."

That's ridiculous. I was right there.

You were in the first row.

Yeah, but that's...

Listen. You were great.

That's a critic.

This is something you're gonna have to get used to.

Believe me, I know.

Spider-Man gets attacked all the time.

- This isn't about you.

It's about me.

It's about my career.

- I know, and I'm just saying,

you can't let it bring you down.

You just gotta believe in yourself.

You pull yourself together,

and you get right back on the horse.

- Don't give me the horse thing.

Try to understand how I feel.

It's just...

I look at these words,

and it's like my father wrote them.

All cars. All cars in the vicinity of 54th and 6th Ave, please report. Crane out of control. Approach with caution.

Go get 'em, tiger.

Sorry.

Oh my God.

Seven Atom to central. That crane .

It's bigger than we thought. We're gonna need a major mobilization right away.

Just gotta douse the accelerator! Now!

OK, Gwen.

I've got a secret. It's my call for ya.

What is that thing doing in my background?

Captain Stacey, the guys look out of shot of it.

They can't shut down the crane.

Get Edison on the phone.

Have them kill the power of the whole block.

Are you all right?

It's coming back!

Oh my God. It's Gwen!

What?

What's she doing up there?

I don't know. I just saw her last night. She said she had a modeling gig.

Who are you?

- It's Brock, sir.

Eddie Brock, jr.

I work at the Daily Bugle.

And I'm dating your daughter.

You OK?

- Yeah.

I'm fine.

Thank you.

Hey, Spidey, hold on. Bugle needs a photo.

Thank God you're OK.

- Daddy!

Hey. I'm the new guy.

- New guy?

From now on, I'm gonna be taking shots of you for the Bugle.

So-- smile! Are you smiling?

Where's the other guy?

- Peter Parker?

Yeah, um, look, between you and me--

The guy's kind of an amateur.

Have you noticed, his stuff makes you look a little... bloated.

Just a little chunky.

- OK...

Don't have to worry about that anymore, buddy.

Dazzeling.

Just a little something the boys in the ad department and I whipped up.

As you know, circulation of the Bugle has been pretty good.

Though not as good as the New York Times

or the Daily News

or the Post or several other smaller...

- Get on with it, moron!

What?

- Your blood pressure, Mr Jameson.

Your wife told me to tell you to watch the anger.

- You tell my wife...

Thank you.

So, I propose this campaign:

"DAILY BUGLE" -- that's obvious.

"IT'S HIP, IT'S NOW" -- I came up with that one.

"IT'S WOW" -- that's actually Eric's.

"AND HOW!" -- that's me again.

Time to take your pill.

Not that one.

Not that one.

Drink plenty of water.

Thank you.

Continue.

He's busy.

Oh, no, I'm just here to talk to you, babe.

(- What's that smell?)

That's a little something called

"Nice 'n' Easy".

What's on you?

- It's called "Go Away".

That is the dumbest idea you've ever had. You have had some daunting...

- Blood pressure.

Hey, where are you going?

Who are you?

- You hired him last week.

Freelance.

- I did? What's that smell?

Brock, sir. Edward Brock junior.

Wow, I really like that shirt.

Here. It's a crane accident. Check out the light source.

He likes my shirt.

Hey, Betty.

- Hey, Pete. You better get in there.

A new guy. He's trying to sell some Spidey photos.

Uh. Thanks.

Parker! You're late! Maybe too late. Bruckner here beat ya to it.

It's Brock, sir. Edward Brock junior.

- I got you this.

But he got me this.

Wait. How'd you get that? I didn't see you.

- How'd you get that high?

Climbed. Nearly fell off a flagpole.

A flagpole?

Which one do we use?

- I like Bernstein's.

It's better.

- Cheaper, too.

Congratulations, son. We'll use your shot and pay you 50 bucks.

Uh-- all right, JJ. I'm your man.

I know more about what makes a good picture

than any photographer in this town.

See, photography, it's not just about

-- no offense -- flagpoles. Whatever.

It's about lighting. Composition. Drama.

I want a staff job, sir.

I have a girl that I intend to marry, and--

I have this stupid little dream of-- working with one of the greatest newspaper editors of our time.

J. Jonah Jameson.

Well, we do have an opening.

Johnson quit, remember?

- You fired him.

- Whatever.

Wait a minute. I know what makes a good picture,

and I've been here for a long time. If there's a staff job,

Mr Jameson, I think I deserve it.

He's right, Jonah. Peter's been with us for years.

He's done a great job.

You want a staff job, and you want a staff job.

Anybody care about what I want?

I do.

- Shut up. Get out.

I want the public to see Spider-Man for the two-bit criminal he really is.

He's a fake. He's full of stickum.

Catch him in the act.

"Spider-Man with his hand in the cookie jar".

Whoever brings me that photo gets the job.

What are you waiting for, Chinese New Year? Go, go, go!

I'm on it, boss.

You'll never get that shot.

We'll see.

You know,

I guess one person can make a difference.

'Nuff said.

Welcome home, Harry.

Thank God you're all right.

Thanks, Bernard.

Aperitif?

- Sure.

Got you a little homecoming present.

Wha-- It's your old ball!

- Yeah.

Thanks, buddy.

We were pretty good in the backyard, weren't we?

We were terrible. And we tried out for the varsity team.

Yeah, for the cheerleaders.

- Right.

Hey, do I have any girlfriends?

I don't know.

- You don't?

Hey Bernard, do I have any girlfriends?

- Not that I know of, sir.

That's a pretty cool pass, huh?

It's OK.

Looks like I'm not worrying for money.

No.

Well, I bet I can turn this little girlfriend thing around.

You know,

he always appreciated how you helped me through high school.

I just wish I could remember more about him.

He loved you.

That's the main thing.

Hey, let's watch the game in the kitchen.

Get something to eat.

- OK.

Whoa, catch that!

Did you see that?

Still got the moves.

Yeah!

Why are you stopping?

What is she doing here?

Gary, you were supposed to call her agent.

Hi, honey.

We tried to reach you.

I'm sorry.

One critic?

- No, all the papers, dear.

Mary Jane, honey. Sit down. Let's explain it to you.

- If you like, we could say you became ill.

That was so poorly handled.

- Yeah. Let's just rehearse.

All right, Spidey!

Excuse me, miss. Let me see that gorgeous smile.

Hi, Eddie.

You're so beautiful.

This is front page stuff.

I've got to practice. I'll see you later, OK?

How about tonight?

- Not tonight.

Why not?

Think of that amazing-- night that we had.

We had a coffee, Eddie.

Hey, beautiful.

One more.

Everything OK?

- Yeah. I'm fine.

You're not still mad at me, are you?

No, Peter. I'm proud of you.

Hey. I'm gonna be swingin' it from over there.

So you know where to look.

Give 'em a good show.

Don't worry about that review.

We're gonna be laughing about it tomorrow night.

Promise.

- Yeah.

Isn't that that guy from that prison break?

He fits.

Hey you! Halt!

Cover the back!

Fire!

People of the city of New York, I am here today

because I fell 62 storeys

and someone caught me.

Someone who never asks for anything in return.

Someone who doesn't even want us to know who he is.

Hey, MJ.

- Harry.

Where is Pete?

Um-- taking somebody's picture, I guess.

I'm so happy to see you. You look so good.

I've never felt better.

It's a weird feeling, not knowing New York.

Bump on the head, I'm just free as a bird.

Will you bump me on the head?

- Bop.

Hey, Pete said you're in a play.

You came. You sent me flowers.

I did?

I'll come again tonight.

You can't.

I--I was let go.

What happened.

I wasn't very good.

You know, this is embarrassing, but...

I once wrote you a play in high school.

You wrote me a play?

Yeah.

- Harry, that's the sweetest thing.

I ask you:
When you're dropping without a parachute

or your store's being robbed

or your house is on fire,

who is it that brakes your fall, puts out the flames and saves your children?

Spider-Man!

They love me!

Then let's hear it! For your one and only friendly neighborhood...

Spider-Man!

Kiss him!

Kiss him!

Go ahead, lay it right on me.

Really?

- Yeah, they'll love it.

Kiss him! Kiss him!

- No, Spider-Man, no!

Right...

Hope Pete's getting a shot of this.

Hey, are you OK?

- Yes, I'm fine.

Jig's up, pal.

I don't want to hurt you.

Leave now.

- I guess you haven't heard?

I'm the sheriff 'round these parts.

OK.

Where do all these guys come from?

Bonsoir. Le monsieur a-t-il un "reservation"?

I'm sorry, I don't speak...

- But this is a French restaurant, non?

Oui.

Name, please?

- Parker, Peter.

Ah. Here we are.

Table for two. Pekar.

Parker.

- That is what I said.

Pekar.

Um, I have a request.

My girlfriend will be coming,

and I have this ring.

Ah. All.

Oh, so you want to pop the question tonight, hein?

Yes, and I want to do something very special.

I love it.

Romance.

I am French.

When I signal you, if you'd bring some champagne with the ring...

In ze bottom of her glass?

Perfect.

- Magnifique.

Also I thought, at the same time

could the musicians

play this song?

Their favorite.

And take good care of the ring.

Ah oui, with my life, monsieur.

- S'il vous plat.

- Oui.

I like you.

Thank you.

"Bon" chance.

Bonne chance.

OK, so... How would you like some champagne?

How'd that get in there?

Aw, don't cry.

Look at you, wow! Beautiful.

- Thanks.

Is this place in your budget?

Oh, it's a special occasion.

You're on Broadway.

I don't feel like much of a star tonight.

Well, you are a star.

And you've earned it.

Peter, you have no idea how I feel right now.

Oh no, I know exactly how you feel.

Listen.

I have been through this.

Happens to me all the time.

I see Spider-Man posters in the window.

Kids running around with me on their sweaters.

Big Hallowe'en item.

I don't know, I guess I've become something of an icon.

Like yesterday.

They keep screaming: "Spider-Man! Spider-Man!"

I don't know, I mean,

I'm thinking to myself,

"I'm just a nerdy kid from Queens. Do I deserve this?"

Hi, Pete.

- Hi.

Hi. My parents and I are just having dinner here.

Hello.

I'm Gwen Stacey.

This is Mary Jane Watson.

Oh, it's so nice to finally meet you. Pete talks about you all the time.

Gwen is my lab partner in Dr Connor's class.

Pete's something of a genius. I'd be completely lost without him.

Which actually reminds me--

Pete, if you got a picture of my kiss with Spider-Man,

could you bring it to class?

I'd really love it.

For my portfolio.

After all, who gets kissed by Spider-Man, right?

I can't imagine.

Well, it was lovely to meet you.

Good night.

- Good night.

Uh, she's in my science class. It's not her best subject.

What?

How come you never mentioned her?

She's your lab partner,

you saved her life,

she thinks you're a genius and she had her polished fingernails all over you?

Or didn't you notice?

And she gave Spider-Man the key to the city.

I'll never forget that.

She's just a girl in my class.

- Let me ask you something.

When you kissed her,

who was kissing her?

Spider-Man or Peter?

What do you mean?

- You know exactly what I mean.

That was our kiss.

Why would you do that?

You must have known how it made me feel.

Do you want to push me away?

Push you away?

Why would I want to push you away? I love you.

You're my girlfriend. She's a girl in my class, MJ.

I don't feel very well. I'm sorry. I have to go.

Where are you going?

- Please don't follow me.

Here we are.

Hi, it's MJ. Sing a song at the beep. Beep!

Hello. Uh...

I wish you'd pick up the phone.

I don't know what's going on.

I don't know if you got the messages, or what.

But...

I just want to talk to you.

OK. Call me, all right?

Hallo?

- Mr Parker?

Yeah?

- This is Detective Neil Garettfrom the 2nd precinct.

I'm calling on behalf of Captain Stacey.

He would like you to come down to the station to speak with him.

Originally we thought that this man, Dennis Carradine,

was your husband's killer.

We were wrong.

What?

- Turns out Mr Carradine was only an accomplice.

The actual killer is still at large.

What are you talking about?

This is the man who killed your husband.

His name is Flint Marko.

He's a small-time crook who's been in and out of prison.

You got this wrong.

Two days ago, he escaped.

Evidently, he confessed his guilt to a cellmate.

And we have a couple of witnesses who corroborate the story.

No, wait, sir. You don't want to do this.

Get in! What are you doing?

Would you put these photos away, please?

I'm sorry, Mrs Parker. I know this isn't easy,

but please be patient with us.

We're doing our job. We will catch him.

No, you're not doing your job.

I watched my uncle die.

We chased down the wrong man.

Now you're telling me there's suspicions for two years? Witnesses?

Why weren't we told about this?

- Settle down, sir.

No, I have no intention of settling down!

This man killed my uncle,

and he's still out there!

L-20 Parkway, all officers in the vicinity please report.

We have an abandoned vehicle and an abandoned man in the middle of the street.

Sorry, Wabash Avenue.

Peter, it's MJ.

I'm not here about what happened at dinner. Just please open up.

Aunt May called me. She told me about what happened.

She's worried about you.

I'm worried about you.

Don't be. I'm fine.

I don't want you to do something stupid.

Like try to find my uncle's killer?

And do something you'll regret.

Like...

with that other guy.

He had a gun on me.

I made a move, and he fell. I told you that.

- I'm not accusing you of anything.

C-22, auto at 566, 9th Avenue...

- Will you turn that thing off?

Peter, I'm here because I care about you.

And I know that you made a mistake and that you feel guilty, but--

I want to be here for you.

- OK.

I get it. Thank you.

But, uh, I'm fine.

I don't need your help.

Everybody needs help sometimes, Peter.

Even Spider-Man.

90 - X-ray - 98.

10-31 at 642, Madison Av...

1-3-Tom has responded 10-20 at 540, East 107...

male inside apartment B on first floor...

310-11 of a residence, 738...

Don't hurt me! Just give me a chance!

- What about my uncle?

Did you give him a chance?

Did you?

Where am I?

What is this?

I feel...

Wow.

This feels good.

This is something else.

What do you think?

I've never seen anything like it.

I'm a physicist, not a biologist, but...

I'll look at it in the morning, run some tests.

- Can we do that now?

It seems to like you.

Don't let any of that get on you.

- Why not?

It has the characteristics of a symbiote,

which needs to bond to a host to survive.

And sometimes, these things in nature, when they bind,

they can be hard to unbind.

Bank robbery in progress, First Eastern Bank Bismarck.

Another sand storm is reported in the vicinity. All cars, proceed with caution.

Marko.

Buddy, love the new outfit.

This is exactly what I need to scoop, partner. Give me some of that web action.

See you, chum.

What the hell?

Flint Marko?

What do you want from me?

Remember Ben Parker?

The old man you shot down in cold blood?

What does it matter to you anyway?

Everything!

It's time to pay, Marko.

Good riddance.

Re-ent!

Not now.

This is a free country. It's not a rent-free country.

Leave me alone.

Give me rent.

You'll get your rent when you fix this damn door!

That wasn't cool.

He is good boy.

He must be in some kind of trouble.

Flint Marko, the man who killed uncle Ben--

he was killed last night.

O my--

What happened?

Spider-Man killed him.

Spider-Man?

I don't understand.

Spider-Man doesn't kill people.

What happened?

I... He was...

I thought that you'd feel...

He deserved it, didn't he?

I don't think it's for us to say whether a person deserves to live or die.

Aunt May, he killed uncle Ben.

Uncle Ben meant the world to us.

But he wouldn't want us living one second with revenge in our hearts.

It's like a poison.

It can take you over.

Before you know it,

turn us into something ugly.

Hello.

Hey, Harry, it's MJ.

Hi.

- I need some company.

Are you doing anything? Can I stop by?

Yeah, sure. Come on over.

OK. Are you sure it's OK?

I'm not doing anything.

Please, come over.

OK, I'll see you soon.

Great.

- Bye.

Bernard?

- Yes, Mr Osborn?

We're having a guest. Can you get some food?

A guest?

- Yeah, a guest.

A guest guest?

Will you just get some food?

Rightaway, sir.

Hey, Mr Ditkovitch.

An orange?

No, thanks.

Listen--

I'm really sorry for what happened earlier.

I shouldn't have yelled about that door. It was nothing to be angry about.

Ah, it's not big deal.

But if you feel that bad about it,

you can buy me pizza some time.

Today's good.

OK.

Have problem with the phone?

No, no, I was just-- was trying to figure out what to say.

If it's a woman you're calling,

then you say:
"You're a good woman,

"I'm good man."

Hi, Pete.

- Hi.

He's calling a woman.

- Are you calling Mary Jane?

I think that would be so good...

- It's none of your business.

Go! Go.

Give her a call.

- Thanks.

Bye.

- Bye.

You hungry?

Yeah.

Come in.

Hope you like peppers.

I love 'em.

Oh, the butter!

Well, we can use that part.

"You've been dreaming."

"Nothing like a little self-deception to get you through the night."

All right.

- When did you write that?

- It's intense.

So, do you want the part?

I'd love to be in your play.

- Cheers.

You know, there's not even a scar.

Barely.

Sorry.

- Me too.

I didn't mean to do that.

- No, it's OK. Please.

Forgive me.

Mary Jane.

Mary Jane.

Mary Jane, please!

- I'm sorry.

You've taken your eye off the ball.

What have you done?

Avenge me!

My father-- he died, right?

Yeah.

Just wish that I could remember more about him.

Well, he loved you.

That's the main thing.

I swear on my father's grave: Spider-Man will pay.

Harry.

Remember me?

Yes, father.

I remember.

I was right about her,

about Peter,

about everything.

You know what you must do.

Make him suffer. Make him wish he were dead.

First we attack his heart.

Hi, it's me. Sing your song at the beep.

Hey, MJ.

It's Peter.

I want to talk to you about last night.

I don't know what I was thinking.

I know you were just there to help, and--

I, uh-- I don't know, I want to see you.

If you want Peter to live,

you're gonna do something for me.

Yeah?

- It's Ursula.

Come in.

Hi, Pete.

- Hi.

There's a phone call for you.

It's Mary Jane, she called back!

Really?

- Yeah!

I put the phone on top of the thing.

Thanks. OK.

Hey.

- Hi.

I was so glad you called.

I've been-- trying to--

- Can you meet me?

You bet.

- Now?

OK. Where?

At the bridge, in the park.

On my way.

Hey. I love you.

You look beautiful.

Peonies.

You OK?

No.

There's something I have to tell you, Pete.

- OK.

It's not working.

You and me.

What?

I don't want to see you anymore.

What are you talking about?

I don't know.

I'm lonely.

You aren't there for me.

I can't do this.

It's over.

- No. Please.

Please don't say that.

I know, I've been selfish.

But I can do better. I can change.

- It's not that simple.

We love each other! I love you!

And we have problems. When people have problems, they work it out.

They talk to each other.

Look, you see?

You know what this is?

You know what I want for us?

- There's someone else.

I've fallen in love with someone else.

She says that she's lonely,

and that I'm not there for her.

There's another guy.

How are you holding up?

Not good.

Harry, I was going to propose to her.

Really?

She's been going through a tough time lately.

Career.

I mean, a singing waitress at a jazz club--

that's not exactly what she had in mind for herself.

A singing waitress? What are you talking about?

She was fired from the show.

Didn't she tell you?

She was fired?

She was fired and she told you?

She didn't tell me?

That's why I asked you here, Pete.

I'm the other guy.

What?

Look, she came to me one afternoon, troubled.

She needed someone, and I was there for her.

I've always loved her, Pete.

You know that.

It just...

started.

I don't believe this.

I don't believe you.

I'm really sorry.

I just thought you should know.

Can I warm you up?

Yes, please.

How's the pie?

So good.

Would you like a drink?

I'm sorry.

What was I thinking? Bad for the public image, right, Mr Key-to-the-city?

What did you do to her?

I did what you failed to do.

I was there for her.

Mary Jane and I, we understand each other.

She doesn't know what you are.

Peter. She knows me very well.

And when she kissed me,

it was just like she used to kiss me.

That taste.

Strawberries.

How d'ya like that, Spidey?

That all you got?

Stinks, doesn't it?

I protected you in high school. Now I'm gonna kick your little ass.

You gonna kill me like you killed my father?

I'm done trying to convince you.

You took him from me.

He loved me.

No:

he despised you.

You were an embarrassment for him.

Look at that little Goblin junior.

Gonna cry?

"THIEF! Spider-Man shows his true colors"

- Spider-Man used to make me feel safe.

Now I'm afraid to walk home from work.

My son thought the world of this guy.

I have a 9 year old daughter, loves Spider-Man.

Who's she supposed to look up to now?

This is the guy they gave the key to the city to?

I'm gonna put some dirt in your eye.

Cheers! New staff photographer!

- I just got lucky.

This is so wonderful for you.

Well, you might wanna tell JJ to make a little more wall space.

Good morning.

- It's a beautiful day, huh?

What was it you said, I'll never get that picture?

There's your hero.

I never thought he'd really do that.

See? Right there,

you made a judgment call.

You gotta see it as it is.

It's funny you should say that,

'cause I was looking through some old photos, and

looks very, uh-- similar.

OK-- Well, I gotta get back to work.

You're trash, Brock.

Excuse me?

Your picture is a fake.

Parker, you are such a boy scout.

When are you gonna give a guy a break?

You want forgiveness?

Get religion.

What's going on here?

- Are you guys all right?

Yeah, no, we're just horsin' around.

Look, I'm begging you. If you do this,

I will lose everything.

There's not a paper in town that will hire me.

You should've thought of that earlier.

What are you doing, Peter?

Show this to the editor. Tell him to check his source next time.

It's a fake!

Empire State Photographic Department confirms it.

Pack your things. Get out of my building.

I was just...

- You're fired!

You know we're gonna have to print a retraction now.

Haven't printed a retraction in 20 years!

"SORRY SPIDEY

Bugle drops charges"

Shalom?

- Mr Parker?

Dr Connors here.

- Oh, Dr Connors!

How are you?

Quite a specimen you left me, Parker.

Its chemistry is not unlike the meteorites of the 70s.

Thanks. It's good.

You know what, Parker?

Parker?

Give me some milk.

It amplifies characteristics of its host.

Hey, give me another cookie.

Specially aggression.

This can be dangerous.

Peter, you didn't keep any, did you?

You got any with nuts?

Um-- I have some nuts, I could make some.

Go make me some.

Peter?

- No, no. Of course not.

Your shots are so good.

I'd love to shoot you sometime.

Peter Parker! Peter...

Parker!

Miss Brent, that's not the position I hired you for!

Black suit Spider-Man!

Peter, these are incredible!

We gotta have these, Jonah.

I'll pay you the usual rate.

If you want the shots, I'll take the staff job. Double the money.

You are really gonna dig this joint.

Do you think I'm dressed all right?

Too fancy or...

You're looking fine, babe.

Thank you.

Love that little giggle.

Oh, this is so cool!

I have never been to a jazz club before.

I hope we can get a table.

Find us some shade.

Thanks, .

Right this way, sir.

"RESERVED"

Thank you.

I'm so loving this.

- Oh, me too.

Isn't that your old girlfriend?

Yeah.

Do you want to go someplace else?

No, no. I'll be OK.

Mary Jane, show us what you got.

I'll be right back.

- Right.

Peter?

This is for you.

Double time!

Thanks.

Now dig all this.

That was all for her?

I'm so sorry.

You all right, Mary Jane?

I'm fine.

- OK.

Hey.

What's wrong with you?

You.

Can I help you, sir?

No.

- Is everything OK here, Paul?

Yeah, is everything OK here, Paul?

Take him out of here.

- Let's go, sir.

Take your hand offa me. Now.

Peter, stop!

Who are you?

I don't know.

It's Brock, Sir.

Edward Brock junior.

I come before you today

humbled

and humiliated

to ask you for one thing.

I want you to kill Peter Parker.

Parker?

Hi, Peter.

- Hi.

You don't seem to have changed the room around very much.

Of course, there's not much you can do,

is there?

When we spoke on the phone,

I sensed something was bothering you,

so I thought I'd just come by.

How's Mary Jane?

I don't know.

I never heard from you.

Did you ever propose?

You said

a husband's gotta put a wife before himself.

I'm not ready.

But what happened?

You seemed so sure.

Yeah. I...

I heard her, aunt May.

I don't know what to do.

You start by doing the hardest thing.

You forgive yourself.

I believe in you, Peter.

You're a good person.

And I know you will find a way to put it right.

In time.

I don't like Spider-Man.

I want him dead too, Flint.

That's why I've been looking for you.

Oh yeah. I know all about you.

Like the fact that Spider-Man

won't let you help your poor daughter.

It's just-- It doesn't seem right to me.

Look.

I wanna kill the Spider.

You wanna kill the Spider.

Together, he doesn't stand a chance.

Interested?

Yeah.

So--

where to?

"BREAKING NEWS: City in crisis"

- All New York is holding its breath

as a hostage crisis continues to unfold.

Just thirty minutes ago, police came across this startling sight:

A young woman held hostage in a taxi

suspended 80 storeys above the ground

in what appears to be a giant web.

Every attempt by the police to rescue the hostage

has been flaunted by the Sandman.

Compounding the danger is the appearance of a strange black-suited figure.

Early reports had believed him

to be the black-suited Spider-Man. But he is now been identified

as something entirely different.

The hostage has been identified

as Mary Jane Watson,

an actrice recently seen in a brief stint on Broadway.

We're now going to take you live to the scene with Jennifer Dugan.

Jennifer?

- We're only about 100 feet away now, Hal, and--

Wait. There seems to be some kind of activity in the web.

It seems to be creating some kind of gigantic lettering.

"SPIDER-MAN, STOP US IF YOU CAN"

Apparently, Spider-Man is being challenged to some sort of confrontation.

And that raises serious questions about what kind of chance he'd stand

against such overwhelming...

Harry.

I need your help.

Can't take them both. Not by myself.

You don't deserve my help.

Harry,

she needs us.

Get out.

If I may, Sir.

I've seen things in this house

I've never spoken of.

What are you trying to tell me?

The night your father died

I cleaned his wound.

The blade that pierced his body

came from his glider.

I know

you're trying to defend your father's honor,

but there's no question

that he died by his own hand.

I loved your father.

As I have loved you, Harry.

As your friends love you.

Look!

He seems to have come out of nowhere to answer the prayers of the city,

just when all hope seemed to be lost.

Peter?

They're gonna kill us both.

I'm gonna get you out of this.

Watch out!

Hey, Parker.

My God. Eddie?

Oh, my spider-sense is tickling.

If you know what I'm talking about.

We can find a way to settle this.

You're so right.

I'm thinking-- humiliation.

Kinda like you humiliated me.

Do you remember?

Do you remember what you did to me?

You made me lose my girl.

Now I'm gonna make you lose yours.

How's that sound, tiger?

Hold on, Mary Jane!

Mary Jane.

It's hard to believe what's happening.

The brutality of it.

I don't know how he can take any more.

This can be a tragic day

for the people of New York.

It could be the end of Spider-Man.

Awesome!

- Wicked cool!

You came.

Looks like just in the nick of time.

A couple of minutes ago wouldn't have been so bad either.

What're you gonna do.

I'm needing some help over here.

I'm a little busy right now.

Give me your hand!

Parker!

Parker, where...

I need a photographer!

Hey, kid. You want a job?

Why would I want a job?

I'm just a kid.

All right, how much for the camera?

One hundred bucks.

- A hundred bucks?

All right, you little prick. Here.

Film's extra.

Gotcha.

Pete, watch out!

You still got any more?

- Hang on!

To what?

Go, buddy!

- Got her!

You OK?

Yeah.

Good.

Hey, Pete.

Am I interrupting?

Never wound

what you can't kill.

Eddie-- this suit-- you gotta take it off!

Oh, you'd like that, wouldn't you?

I know what it feels like.

It feels good.

The power. Everything.

But you'll lose yourself.

Let it go.

I like being bad.

It makes me happy.

Harry!

Peter, what are you doing?

No!

Eddie!

Harry?

- Mary Jane.

I'm going to get help.

Stay.

I didn't want this.

But I had no choice.

We always have a choice.

You had a choice when you killed my uncle.

My daughter was dying.

I needed money.

I was scared.

I told your uncle all I wanted was the car.

What is it?

- I need your car.

He said to me:

"Why don't you just put down the gun and go home?"

I realize now he was just trying to help me.

Then I saw my partner running over with the cash,

and the gun was in my hand.

Did a terrible thing to you.

I spent a lot of nights wishing I could take it back.

I'm not asking you to forgive me.

I just want you to understand.

I've done terrible things too.

You didn't choose to be this.

The only thing left to me now

is my daughter.

I forgive you.

Hey, pal. How are you doing?

Been better.

We'll get you through this.

No.

You should never forgive...

...said those things.

None of that matters, Peter.

You're my friend.

Best friend.

Whatever comes our way.

Whatever battle we have raging inside us, we always have a choice.

My friend Harry taught me that.

He chose to be the best of himself.

It's the choices that make us who we are,

and we can always choose to do what's right.

I'm through with love

I'll never fall again

Said adieu to love

Don't ever call again

For I must have you

Or no one

And so I'm through with love

I've locked my heart

I'll keep my feelings there

I have stocked my heart

With icy frigid air

And I mean to care

For no one...

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
