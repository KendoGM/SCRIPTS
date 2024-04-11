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

enviarScript(`}

INTERSTELLAR

                         
                         
                         
Written by

Jonathan Nolan





 STORY BY

Jonathan Nolan, Kip Thorne & Lynda Obst








                     MARCH 12 2008


SPACE.

But not the dark lonely corner of it we're used to. This is
a glittering inferno -- the center of a distant galaxy.

Suddenly, something TEARS past at incredible speed: a NEUTRON
STAR. It SMASHES headlong through everything it encounters...
planets, stars. Can anything stop this juggernaut?

Yes. Something looms at the heart of the galaxy, hidden
inside the blinding starlight, a dark flaw in the fabric of
existence itself: a BLACK HOLE.

The neutron star is pulled into the black hole's swirl,
spiraling closer and closer to destruction. Finally, it
contacts the hole's edge and EXPLODES.

The EXPLOSION is so powerful that it sends shock waves into
the fabric of space-time itself. We ride one of these waves,
racing back out from the black hole.

Suddenly, a portion of the wave disappears down a crystal-
like hole, emerging in a much darker region of the universe --
a backwater that, as the wave races past a giant red planet
with a distinctive eye, we recognize as our own.

The wave, now just an infinitesimal ripple, finally reaches
our blue planet. It drops into our atmosphere over North
America, toward the high desert east of the Cascades, and
through the roof of a nondescript warehouse.

The wave tickles the atoms in the steel shell of a vacuum
chamber, then dances a tiny jig with a laser beam reflected
in a heavy piece of glass.

The wave shoots back out of the building and disappears in
the fractal branches of a tumbleweed resting against a
concrete tube that stretches for miles in the desert.

An SUV speeds past the tumbleweed and we follow it till it
parks at another plain-looking building at the opposite end
of the tube. A MAN climbs out of the SUV.

INT. CONTROL ROOM, WAREHOUSE -- DAY

The man lets himself into a large room that looks like Mission
Control. He pours himself a cup of coffee. It is the weekend
and the place is empty. No one has been there to see the
displays flashing a distinctive shape -- a pulse followed by
a series of echoes.

The man looks up at the screen, then DROPS his cup of coffee.

CUT TO:
2. 

INT. LIGO OFFICES, CALTECH, PASADENA -- DAY

The Laser Interferometer Gravitational-Wave Observatory
headquarters at Caltech is a frenzy of activity. POSTDOCS
and RESEARCHERS huddle around monitors and printouts, arguing.

ANSEN, 60s, the director of LIGO, walks through the frenzy.
A postdoc hands him a printout: a pulse followed by echoes.

INT. LIGO DIRECTOR'S OFFICE, CALTECH -- DAY

Ansen steps into the relative calm of a large, sunlit office,
which overlooks a grassy stretch of Caltech's campus.

His ASSISTANT, 30s, is on the phone, on hold. He looks up
at Ansen as he enters.

ASSISTANT
I'm on hold with the INS.
(COVERS MICROPHONE)
Don't you think we should double
check the triangulation before we
CALL ANYBODY-

ANSEN
We have double checked it.

Someone finally picks up the line.

ASSISTANT
Yes. I'm trying to reach-
(pause, listens)
No, I don't think you understand how
serious this is.
(PAUSE)
Because if you did, we'd be having
this conversation in person.

He listens for a moment, then hangs up the phone, confused.

ANSEN
What did they say?

ASSISTANT
They said we should look out the
window.

Ansen steps to the window and looks out:

In the courtyard below, coeds are scrambling to get out of
the way as a military helicopter sets down in the middle of
the quad and dozens of ARMED FEDERAL AGENTS converge on his
building.
3.

INT. MAIN CONFERENCE ROOM, LIGO, CALTECH -- DAY

Ansen sits, alone, on one side of a conference table.

The other side is filled with GOVERNMENT MEN -- NSA mostly,
some DIA. The door opens and his assistant steps in. Armed
guards pat him down, then shove him into a seat.

ANSEN
Is that really necessary?

One of the NSA agents leans forward.

NSA AGENT
You've been complaining for years
that the government doesn't take
your project seriously enough, Doctor.
(SMILES)
You can't have it both ways.

Ansen motions to his assistant, who turns on a projector.
On-screen, we see the familiar pulse and echoes.

ANSEN
Yesterday morning, our facility in
Hanford identified this signal: a
neutron star colliding with a
supermassive black hole. We went
through the last year's data and
triangulated the source.

The pulse is translated into a crude animatic of a neutron
star circling into the black hole.

NSA AGENT
We know that, Doctor. What we don't
know is why, according to your
numbers, this event took place right
here in our own solar system.

Suddenly, the image overlays the sun, the earth, and the
rest of our solar system around the black hole.

ANSEN
It didn't. Because if it had we'd
all be dead by now.

On-screen, Jupiter, then the Earth and the inner planets are
consumed by the black hole. Only the sun survives, pulled
into orbit around its new master.

ANSEN (CONT'D)
Which leaves only one explanation:
The signal traveled through a
(MORE)
4. 

ANSEN (CONT'D)
wormhole. A gateway to a distant
corner of the universe. The black
hole is on the far side.

On-screen, the black hole system is removed to a distant
corner, connected to ours by a tunnel through space-time. A
gravity wave from the collision travels through the tunnel.

NSA AGENT
I've read your book, Doctor. You
said that wormholes are impossible.

ANSEN
There is nothing quite as satisfying
as being proved utterly wrong.
(SMILES)
I said that a wormhole couldn't exist
naturally. Not for more than a few
billionths of a second. It would
have to be... stabilized.

NSA AGENT
Stabilized by what?

Ansen pauses, unsure. His assistant steps in to his defense.

ASSISTANT
We don't have any way to answer that
question.

NSA AGENT
(IGNORES HIM)
You're not under peer review here,
Doctor. I don't care about your
reputation. I need to know how that
thing got there. Now.

Ansen finally speaks up.

ANSEN
If you're worried about an invasion,
I would start drafting the articles
of surrender.
(SMILES)
Whoever they are, if they can build
a wormhole, they could erase us in
the blink of an eye. Luckily, that
also means we have nothing they could
be interested in.

NSA AGENT
Then why is it there?
5.

ANSEN
I don't know. Maybe it's an
invitation. A chance to commune
with an advanced species.

The assistant, embarrassed, looks down. The agent notices.

NSA AGENT
You don't agree?

ASSISTANT
(DELICATE)
No. I don't think we can assume an
alien intelligence built the wormhole.
(CHANGES TACK)
But the opportunity it represents is
incredible. We could explore parts
of the universe we never dreamt of
reaching in our lifetimes.

The agent exchanges a look with one of his colleagues, who
steps out of the room.

ANSEN
We need to get back to work. I have
a conference call with our European
partners in fifteen minutes.

NSA AGENT
We severed the connections to your
European partners this morning.

ANSEN
(INDIGNANT)
You can't do that. The Europeans
put up some of the funding...

GOVERNMENT MAN
We'll send them a check.
(STANDS)
Your project is now classified under
the State Secrets Act.

He steps out the door, leaving the men alone. The assistant,
outraged, turns back to his boss.

ASSISTANT
They can't keep this a secret. You
know that. Sooner or later...

The younger man looks down, embarrassed, as he notices that
tears are rolling down the older man's cheeks.
6.

ANSEN
I don't care about that. I've spent
my whole life being afraid we would
wipe ourselves out before this moment
arrived. We've made so many mistakes,
I wasn't sure we'd make it...

The assitant realizes that the old man is weeping for joy.
Relief.

ANSEN (CONT'D)
But this will change everything.
Fifty years from now, nothing will
be the same.

The older man looks at the simulation on the screen of the
tiny link between our galaxy and another.

FADE TO BLACK

EXT. CORNFIELD, CENTRAL CALIFORNIA -- DAY

Corn. As far as the eye can see.

SUPER TITLE: "FIFTY YEARS LATER"

A large old diesel tour bus is parked by the side of a dirt
road, smoke pouring out of its open hood. A dozen MEN in
BASEBALL UNIFORMS are standing around the front of the bus.

A battered PICKUP pulls up, and a MAN, 30s, gets out, leaving
his two SONS in the car. This is COOPER. He joins the
ballplayers staring at the lifeless diesel engine.

BALLPLAYER
Seized up on us.

COOPER
Long way to come by bus. I thought
you guys would have a plane.

BALLPLAYER
We did. Ran out of parts for it.
You know anything about diesels?

COOPER
A little.

Cooper steps to the engine compartment.

The ballplayer notices Cooper's two boys, TOM, 15, and MURPH,
10, watching them. He wanders over.
7.

BALLPLAYER
You think your dad's going to be
able to help us out?

Murph, a filth-encrusted kid with a black eye, smiles at the
ballplayer.

MURPH
My dad can fix anything.
(WRY SMILE)
Except maybe your fastball.

The ballplayer frowns: smartass kid.

After a moment under the hood, Cooper signals to the driver,
who tries the engine. It turns over once, then STARTS.

BALLPLAYER
Sure appreciate the help.

COOPER
(SHRUGS)
You don't make it, my boys won't get
to see you lose.

The ballplayers load up into the bus and as it pulls away,
we can see the logo painted across the back of the bus for
the first time:

WORLD FAMOUS NEW YORK YANKEES

EXT. SPACE, NEAR EARTH ORBIT

Earth spins, lazily. From this height, it looks much the
same as it has done for thousands of years.

Suddenly, a tiny black object appears, racing toward Earth.

The object SMASHES into a large satellite and races onward.
Behind it, the satellite spins out of orbit in a cloud of
fragments.

EXT. BASEBALL STADIUM -- NIGHT

An old minor league stadium. The stands are barely halfway
full. Cooper, his boys, and Cooper's father-in-law, DONALD,
60s, have a row to themselves behind the dugout.

Murph offers his grandpa some popcorn.

DONALD
Popcorn at a ball game is unnatural.
I want a hot dog.
8.

MURPH
(CONFUSED)
What's a hot dog?

Suddenly, play stops on the field below as the players and
fans look up at the night sky:

A bright blue streak is tearing across it. It's beautiful.

TOM
Is that a comet, Dad?

COOPER
(shakes his head)
Satellite. Big one. Probably
Chinese.

Everyone watches the fireworks as the satellite burns up in
the upper atmosphere.

After a moment, play resumes -- it's a pretty show, but
everyone has seen it plenty of times before.

Down on the field, the Dodgers' catcher misses an easy pop
fly and the Yankees load the bases. Donald looks disgusted.

INT. COOPER'S TRUCK -- NIGHT

Cooper guides his truck along a potholed road. His father-
in-law is riding shotgun; the boys are sleeping in the back.

DONALD
Those clowns would get their asses
handed to them by the ballplayers I
grew up watching.

COOPER
You ruin it for the boys when you
talk like that.

DONALD
I'm not doing my grandkids any favors
by lying to them. They're growing
up watching lousy baseball.

COOPER
They didn't have any baseball at all
when I was a kid.

That shuts the old man up for now. They drive on in silence.

CUT TO:
9.

EXT. FARMHOUSE -- MORNING

The sun is gently landing on the horizon, painting the sea
of corn around Cooper's modest house gold. Cooper walks out
of his house, still eating his breakfast.

Donald is on the porch, looking at a black clouds of smoke
in the distance. The neighboring fields are BURNING.

DONALD
Nelson's burning up his crops. Found
some of the blight on the okra.

Cooper watches the men walking through the fields, setting
fire to the crop.

COOPER
I thought okra wasn't susceptible.

DONALD
(SHRUGS)
Better safe than sorry.
(looks at him)
You've got to take the boys to school.

COOPER
Something wrong with your truck?

DONALD
(SMILES)
Parent-teacher conference day.

Cooper bends his head in dismay.

DONALD (CONT'D)
Be nice to Murph's teacher. She's
single, you know.

COOPER
What does that have to do with
anything?

DONALD
We're supposed to be repopulating
the earth. Gotta pull your weight.
Besides, the boys could do with a
woman in their lives.

The boys run out of the house and pile into the truck. Cooper
pulls away before Donald can continue.

EXT. ROAD -- DAY

Cooper weaves the car along a dirt road. The kids are arguing
over an ancient comic book in the back seat.
10.

Cooper turns around to break it up.

BANG -- one of the tires blows out in a foot-deep pothole.

EXT. ROADSIDE -- DAY

Cooper examines the flattened tire. Looks at his older son.

COOPER
Get the spare, Tom.

TOM
That is the spare.

COOPER
All right. We'll use the patch kit.

He moves to the back of the truck. Murph suddenly looks
very glum.

MURPH
I... I think the patch kit might not
be there...
(off his look)
Because I was using it for my bike.

Cooper looks down at the dirt. Sighs.

COOPER
Murph's law.

MURPH
(CONFUSED)
What's that?

Tom snorts with laughter. Turns to his dad.

TOM
The kid doesn't even know what he
was named after...

Cooper shoots Tom a look -- enough.

TOM (CONT'D)
Murph's law means what can go wrong
will go wrong.

Murph, looking hurt, walks off. Cooper turns to his son.

COOPER
Find something to patch it with.

TOM
How am I supposed to do that?
11.

COOPER
Figure it out. I'm not always going
to be here to help you.

Cooper leaves Tom to catch up with his younger son, who is
looking out over the river.

MURPH
Is that really why I'm named Murph,
dad?

COOPER
Listen to me. Murph's law doesn't
mean that. It means what can happen
will happen. All kinds of things.
Good or bad. And that's the way you
want it to be.

MURPH
Why?

COOPER
Because if nothing ever happened to
you then you wouldn't learn anything.

Murph is staring off into the distance. He's heard something.

COOPER (CONT'D)
Murph?

Then Cooper hears it, too. A LOW RUMBLING SOUND. Cooper
looks out over the river. Then he turns back and tackles
his son to the ground.

Suddenly, a MASSIVE AIRPLANE SOARS overhead, so close they
can almost touch it. It bounces the truck on its suspension,
then soars off over the fields behind them.

Cooper grabs Murph and races back to the truck. He pulls a
laptop and an antenna made out of a Pringles can out of the
back of the truck. He hands the laptop and antenna to Murph.

COOPER (CONT'D)
Get in.

Tom is still standing by the side of the road, wrestling
with the jack.

TOM
What about the tire?

INT. TRUCK -- MOMENTS LATER

The truck is SMASHING through the cornfields as fast as Cooper
can push it on three good tires.
12.

Murph is hurriedly firing up the laptop and connecting it to
the directional antenna.

Cooper is straining to see through the cornstalks, scanning
the horizon.

TOM
OVER THERE-

To the right, the dark shape of the Russian drone appears,
flying low over the fields. Cooper jerks the wheel--

EXT. RIVER -- DAY

The truck BURSTS out of the corn and SPLASHES across the
river and into an old, abandoned suburban housing development
in the valley below, planted over with corn.

Half a mile in front of them, the Russian drone is still
hugging the ground. It has impossibly long, skinny wings,
like an old U-2 surveillance plane, but no cockpit. The
tops of its wings are covered in black solar cells.

INT. TRUCK -- DAY

Murph is fiddling with the computer. His older brother takes
the computer from him and fires up emulation software.

COOPER
It's a Chinese military drone. Solar
cells could power an entire farm.
(TO TOM)
Take the wheel.

Cooper hands Murph the Pringles can antenna.

COOPER (CONT'D)
Keep it pointed right at it, OK?

Murph nods. Tom takes the wheel as his dad works the laptop,
trying to communicate with the huge Russian drone. The screen
fills with Cyrillic characters.

COOPER (CONT'D)
Faster, Tom. I'm losing it.

Tom WEAVES the truck at speed through the old, curved streets
of the development, past oversized suburban mansions planted
over with corn.

They round a corner and come face-to-face with a robot
harvester. Tom jerks the wheel to avoid it.

BANG -- the truck loses a wing mirror against the flank of
the combine.
13.

EXT. SUBURBAN DEVELOPMENT -- DAY

Tom guides the truck from street to street, trying to chart
a straight path across the fields. The truck BOUNCES as it
SMASHES through an old picket fence.

Ahead, the drone is soaring, banking, pulling away.

INT. TRUCK -- DAY

Cooper is still trying to hack into the drone's control
circuitry as they leave the development behind and begin to
climb into the foothills of the Sierras.

EXT. RIDGELINE, HILLS -- DAY

Tom guides the truck along the spine of the hills. The drone
soars overhead, making for the white tips of the Sierras.

INT. TRUCK -- DAY

Cooper is oblivious to the picturesque surroundings as he
concentrates on the laptop.

TOM
(UNSURE)
Dad?

COOPER
Almost got it. Don't slow down.

In front of them, Tom and his brother watch as the drone
plummets from view.

TOM
DAD.

Cooper looks up. Ahead, the trail disappears as the edge of
the hills falls away -- it's a three hundred-foot drop.

Tom locks up the brakes.

EXT. RIDGELINE, HILLS -- DAY

The truck skids to a halt inches from a precipitous drop.

Cooper climbs out, holding the laptop. Murph climbs out
next to him, still pointing the Pringles can.

TOM
We lost it.

COOPER
(SMILING)
No we didn't.
14.

Suddenly, the drone SOARS back over them. Cooper types a
couple keys and then moves his fingers across the trackpad.
The huge drone banks and turns in response.

As the boys watch, Cooper sends the drone soaring high over
them, banking and soaring along the tree-lined sides of the
valley, light glinting from the black panels on its back.
It's a beautiful sight.

Cooper crouches next to Murph.

COOPER (CONT'D)
You want to give it a whirl?

Murph looks at his dad, wide-eyed. He takes the laptop and
moves his fingers gingerly across the pad.

In response, the massive plane banks into a tight turn in
the valley below.

For a moment, Murph is in pure heaven, sending the drone
dancing through the valley below.

COOPER (CONT'D)
Set her down in the valley -- there,
next to the river.

Murph leads the plane in a figure eight and then begins
guiding it into a gentle landing in the valley floor below.

EXT. ABANDONED GOLF COURSE, VALLEY FLOOR -- DAY

The truck limps along the overgrown fairway of a long-defunct
golf course towards the massive hulk of the Russian drone,

Cooper and the boys climb down. The valley is silent save
for the truck's engine WHEEZING and SPUTTERING as it cools.

Cooper runs a hand over the smooth carbon flank of the drone.

TOM
How long do you think it's been up
there, Dad?

COOPER
Chinese mission control went down
same as us, twenty years ago. It's
been up there ever since.

TOM
What was it doing flying so low?

Cooper reads the information pouring into his laptop.
15.

COOPER
It was looking for something.
Intercepted some kind of signal.
(SHRUGS)
It's been at eighty thousand feet.
Sun probably cooked its brain.

Cooper runs his hand along the flank till he finds an access
patch. He pulls out a crowbar and pries open the hatch.
Inside, surrounded by a nest of liquid cooling tubes, is a
small black module -- the drone's auto-pilot.

Cooper looks down at Murph, who is standing at his elbow.

MURPH
What are you going to do with it?

COOPER
Reprogram it. Give it something
socially responsible to do like drive
a combine or a tractor.

MURPH
(QUIET)
Couldn't we just let it go? It's
not hurting anyone.

Cooper looks down at his son. Good kid.

COOPER
We need all the help we can get,
Murph. This thing has to adapt,
just like the rest of us.

Cooper gently pries the control module out.

EXT. COUNTY SCHOOL -- DAY

It's a small school, so all the kids and parents waiting in
front know exactly who's driving the pickup truck with half
of a Russian spy plane hanging out of the bed as it pulls up.

INT. PRINCIPAL'S OFFICE, COUNTY SCHOOL -- DAY

Cooper is ushered into the office. The PRINCIPAL, 40s, an
efficient-looking man, shakes his hand.

PRINCIPAL
Good to see you, Mr. Cooper. This
is Ms. Kelly, Murph's teacher.

Cooper smiles at Ms. KELLY, 30s, attractive.
16.

PRINCIPAL (CONT'D)
So we've gotten Tom's score back.
Congratulations. He's going to make
an excellent farmer.

The principal slides a carbon copy across the desk to Cooper,
who looks taken aback.

COOPER
What about college?

PRINCIPAL
The University of California only
accepts a few hundred students a
year, Mr. Cooper. You have to be
realistic.

COOPER
You're ruling out college for him
now? He's only fifteen.

PRINCIPAL
I'm sorry. I'm afraid Tom's score
simply isn't high enough.

COOPER
What are you, about a 36-inch waist?
(BEAT)
30-inch inseam?

PRINCIPAL
I'm not sure I see--

COOPER
You're telling me you need two numbers
to measure your own ass, but just
one to measure my son's future?

Ms. Kelly stifles a laugh, then, with a look from the
principal, takes on the appropriate look of offense.

PRINCIPAL
I understand you're a well-educated
man, Mr. Cooper. A scientist?

COOPER
Engineer.

PRINCIPAL
Frankly, the world doesn't need any
more engineers. We didn't run out
of trains or television sets or
satellites.
(BEAT)
We ran out of food.
17.

Cooper leans back. He's not going to win this one.

PRINCIPAL (CONT'D)
The world needs farmers, Mr. Cooper.
And I'm sure your son Tom is going
to make a fine one.
(SMILES BENIGNLY)
We're a caretaker generation. But
things are getting better. Maybe
your grandchildren will be able to
attend college.

Cooper looks down, swallowing his anger.

COOPER
Are we done?

PRINCIPAL
One more thing. Ms. Kelly here says
that Murph brought a book to school
about the lunar landings.

He slides an old textbook with a picture of a rocket on the
cover across the desk to Cooper.

COOPER
One of my old textbooks. Murph liked
the pictures.

MS. KELLY
This is one of the old federal
textbooks. We've replaced them with
corrected versions.

COOPER
Corrected?

MS. KELLY
The new textbooks explain that the
Apollo lunar missions were faked in
order to bankrupt the Soviet Union.

COOPER
You don't believe we went to the
moon?

MS. KELLY
I believe it was a brilliant piece
of propaganda. The Soviets spent
years trying to build rockets and
other useless machines.

COOPER
"Useless machines"?
18.

Cooper looks to the Principal for help. None is forthcoming.

MS. KELLY
Yes, Mr. Cooper. The kind of
wastefulness and excess that the
20th century represented. Your
children would be better off learning
about this planet, rather than reading
fantasies about leaving it.

Cooper is silent for a long moment.

COOPER
One of those useless machines they
used to make was called an MRI. If
we had any of them left the doctors
might have been able to find the
cyst in my wife's brain before she
died, rather than afterwards. And
then my kids could have been raised
by two parents, instead of me and
their pain-in-the-ass grandfather.

Ms. Kelly's face falls, ashen. Cooper swallows his anger.
Most of it, anyway.

COOPER (CONT'D)
You ever consider the best thing for
the world and humanity might have
been for us to part company?

Cooper gets up to leave.

INT. TRUCK, COUNTY SCHOOL PARKING LOT -- DAY

Cooper climbs into the truck, trying to hold it together.
He PUNCHES the wheel.

The radio KEYS to life. He ignores it. Sits for a moment
in misery. Finally he picks up the handset.

CB OPERATOR (O.S.)
Got a call from Riggs, down in
Galveston. Says some of the tractors
you built him went haywire last night.

COOPER
Just tell him to power down the
controllers for a couple minutes.

CB OPERATOR (O.S.)
I did. He wants you to come down in
person anyway. Says he found
something you should take a look at.
19.

Cooper stares at the wheel. Shakes his head in frustration.

EXT. AIRSTRIP -- DAY

Cooper pulls his truck up to a grimy-looking hangar. Pulls
a tarp off of an ancient Piper Cub. Checks it over.

INT. PIPER CUB -- DAY

Cooper guides the plane along a long sliver of deserted beach.
The radio crackles to life.

COOPER
Bravo-two-eight, requesting permission
to enter your airspace.

AIR TRAFFIC CONTROL (O.S.)
Permission granted. Welcome to the
sovereign nation of Texas.

Coop hangs up the radio. Banks the plane inland.

EXT. GULF COAST -- DAY

Below, a combine harvester fights its way up the dunes, trying
to reach the beach, its wheels struggling for traction in
the soft sand.

A MAN waves up at Cooper's plane as it circles overhead.

Cooper lands the plane on a deserted roadway. Jumps down.

He intercepts one of the combines as it trundles past, trying
to reach the dunes. He pops open the cabin.

Inside is a mess of wires hooked into an auto-pilot not unlike
the one he ripped out of the drone. He checks the fault
code and resets the computer.

The man jogs over to meet him.

RIGGS
Thanks for coming down. Half of 'em
took off last night, looking for
something.
(points to dunes)
Looks like they found it, too. I
thought you were the man to see it.

Riggs starts walking up the dune. Cooper follows.

Below, on the beach, a dozen more combines and other farming
vehicles are lined up at the tideline, warm gulf water lapping
at their metal flanks. They are circling a deep crater.
20.

As they watch, an ancient autonomous SUB BEACHES itself,
trying to reach the crater.

EXT. CRATER'S EDGE, BEACH -- DAY

Cooper steps between the waiting machines and peers down
into the crater.

At the very bottom is a ROUND BLACK BALL, about a foot across --
the same object we saw punch a hole in the side of a
satellite. Every few seconds, it emits a distinctive CHIRP.

Cooper checks his rad meter. A tiny reading -- non-lethal.
He takes off his watch and hands it to Riggs. Then he slides
down into the hole.

The probe CHIRPS as Cooper slides down on top of it. He
rubs a hand across its smooth composite bulk.

RIGGS
(FROM ABOVE)
You think it's an alien?

Cooper wipes sand off of the object, revealing the faint,
familiar outline etched into the side of the probe:

The stars and stripes of the old federal government.

COOPER
Not exactly.

EXT. CRATER'S EDGE, BEACH -- DAY

Using a rope and a winch, Cooper hauls the blackened probe
out of the crater and onto the beach.

Cooper hefts it up and carries it to the back of his plane.

COOPER
Space probe. Never seen one like
it, though. Looks like it's been to
hell and back.

The probe CHIRPS as Cooper belts it into the back.

RIGGS
How do you think it wound up here?

COOPER
Lost, I guess. Guidance satellites
would have been shot down by the
Chinese twenty years ago.

Cooper looks at the probe for a second, admiring its form.
21.

INT. KITCHEN, COOPER'S HOUSE -- NIGHT

Donald is pouring a bottle of corn beer into a bubbling vat
of chowder. He turns to watch Cooper work, amused.

The probe has been clamped to the kitchen table. Cooper
works at the blackened case with a BLOWTORCH. Cooper gives
up -- the torch hasn't made a scratch. The probe CHIRPS.

COOPER
Well I don't know what the hell it's
made of, but I can't crack it open.

DONALD
Good. Clear it off the table so I
can serve dinner.

Tom and Murph walk in. Murph's got another black eye.

DONALD (CONT'D)
What happened this time?

MURPH
I got suspended. Paul said anyone
who believed we went to the moon was
an idiot. So I hit him.

COOPER
Good boy. Hand me the scanner.

Murph hands his dad a defibrillator he's modified for the
purpose. He attaches the shock pads to the sides of the
probe and turns on the power.

Numbers flash across the screen. Cooper hits a button on
the controls and it PULSES.

COOPER (CONT'D)
Here we go. Standard NASA encryption.
Memory's been damaged. Just noise.
Hold on. I've got something.

Cooper unplugs a monitor from his computer and plugs it into
the defibrillator. After a moment, an image fills the screen:

An ICE-COVERED PLANET nestled in the center of a system
impossibly dense with stars. Murph stares, transfixed.

MURPH
Where is that, dad?

COOPER
I don't know.

Cooper looks at the probe.
22.

COOPER (CONT'D)
Where the hell did you come from?

Cooper shrugs. Turns off the monitor.

COOPER (CONT'D)
We'll take it down to Tyson's tomorrow
and have it melted down. Might be
some copper inside.

MURPH
But what about its mission? What
about the information onboard?

COOPER
There's no one for it to report to.
NASA is all gone. I'm sorry, son.
It got home too late.

Donald pulls his chowder off the boil and slides the pot
unceremoniously onto the table.

INT. DINING ROOM -- NIGHT

The boys have gone to bed. Cooper and Donald are alone at
the table. Donald hands Cooper another beer.

DONALD
I heard your meeting at the school
didn't go so well.

Cooper shakes his head in disgust.

COOPER
Maybe it's better for everyone to
forget what they did back then.
Reminds us how far we've fallen.

DONALD
(looks down,)
When I was kid, it felt like they
made something new every day. Some
gadget or idea.
(SMILES)
Like every day was Christmas.
(BEAT)
But we made a lot of mistakes. Six
billion people. Just try to imagine
that. Every last one of them trying
to have it all.

Donald rolls the bottle of beer in his hands.
23.

DONALD (CONT'D)
The truth is this world isn't that
bad. In a lot of ways its better.
Tom will be all right, whether he
goes to college or not.

COOPER
It doesn't bother me that he can't
go. It bothers me that he doesn't
care.

DONALD
Tom isn't the problem. He fits in
this world just fine. You're the
one who doesn't fit, Coop. You don't
belong here. You were born forty
years too late, or forty years too
early -- I don't know. My daughter
knew it, god bless her. And your
kids know it, too.

Donald drains his beer. Walks to the screen door. Stops,
one hand on the frame.

DONALD (CONT'D)
You were good at something and you
never got a chance to do anything
with it. And I'm sorry, Coop. But
that's not your kids' fault.

Donald pushes out the screen door.

Cooper looks at his beer. The probe CHIRPS.

INT. BEDROOM, COOPER'S HOUSE -- NIGHT

Cooper flops down on his bed, fully clothed, exhausted. He
stares up at the ceiling. This is his life.

INT. BEDROOM, COOPER'S HOUSE -- NIGHT

The air is filled with a PIERCING NOISE.

Cooper BOLTS upright. Stumbles out the door.

INT. HALLWAY, COOPER'S HOUSE -- NIGHT

Cooper's boys are in the hallway, exhausted. Cooper, holding
a baseball bat, makes his way down the stairs.

Cooper uses the bat to open the kitchen door.

INT. KITCHEN, COOPER'S HOUSE -- NIGHT

Cooper steps in, Murph watching from behind him.
24.

The probe is clamped to the table, the chirp replaced with a
DEAFENING SCREAM.

Cooper, holding his ears, moves closer to the probe. He
hits it with the paddles. No result.

He SMASHES it with the bat. Nothing. He HITS it AGAIN and
AGAIN. Finally, the clamps break off chunks of the table
and the probe slams to the ground and ROLLS toward the front
door. As it rolls, it STOPS SHRIEKING.

Cooper and the others watch it roll toward the door. It
stops at the wall. After a second, it begins SHRIEKING AGAIN.

Cooper grabs it and rolls it toward the front door. Once
again, the movement shuts it up.

EXT. PORCH, COOPER'S HOUSE -- NIGHT

Cooper and his boys roll the probe out of the front door.
It BUMPS down the front steps and comes to rest in the dirt.
After a moment, the unholy RACKET starts up again.

Cooper keeps rolling it, but it doesn't seem to help. Murph
looks up, sees the stars overhead.

MURPH
Try a different direction.

As they roll the probe in a circle, its SHRIEK stops, then
picks up again. Cooper zeroes in on the direction that keeps
it quiet -- southwest -- and pushes it along in the dirt.

COOPER
It's a fail-safe. It's going to
annoy us into taking it home.

Cooper stops rolling the probe and, after a moment, it begins
SHRIEKING again.

TOM
What are we going to do?

Cooper gets a rope.

COOPER
We're going to get some sleep.

He begins tying the rope around the probe.

INT. BEDROOM, COOPER'S HOUSE -- DAY

Cooper wakes. He's been sleeping with a pillow wrapped around
his head. The SHRIEK can be heard, but it's muffled, distant.
25.

INT. KITCHEN, COOPER'S HOUSE -- DAY

Tom heads off for school with Donald. Murph, still suspended,
looks up at Cooper, smiling.

MURPH
What are we doing today?

COOPER
You're staying here and cleaning the
house.

Murph looks crestfallen. He looks out towards the yard.
Cooper follows his stare.

COOPER (CONT'D)
I told you, Murph. There's no one
to take it back to.

MURPH
But what if there is, dad? What if
there's something we can salvage?

Cooper thinks it over. Murph scrambles to get his shoes.

EXT. COOPER'S HOUSE -- DAY

The shriek is still muffled. Cooper walks over to the well,
putting in a pair of earplugs.

A line is staked off, leading down into the well below.
Cooper begins hauling the line up.

As the probe breaks the surface of the water, the SHRIEK
returns to its normal volume. Cooper rolls the probe out
onto the ground.

INT. PIPER CUB -- DAY

The probe CHIRPS next to Murph in the backseat as Cooper
spins the plane and guns the throttle and they bounce along
the dusty runway and into the air.

EXT. CALIFORNIA COAST -- DAY

The tiny plane follows the mountains south.

EXT. SKIES OVER LOS ANGELES -- DAY

Cooper flies in low. Los Angeles looks much the same way it
did in the early 20th century -- small settlements in Santa
Monica and Downtown. Wildfires and earthquakes have shaken
and burned what was left of the homes in between.
26.

EXT. PACIFIC COAST HIGHWAY, MALIBU -- DAY

Cooper puts the plane down on the old highway and taxis up
to a gas station. Ahead, the Coast Highway peters out and
disappears beneath rows of wild grass -- Malibu has become
ranchland, once again.

EXT. GAS STATION, MALIBU -- DAY

An OLD MAN looks up as Cooper steps out of the plane and
checks it over.

COOPER
Got any diesel?

OLD MAN
Plenty. Shame you can't eat it.

Cooper stretches the hose over to the plane.

INT. PIPER CUB -- DAY

Cooper rests a hand lightly on the controls as he follows
the coast. Murph gazes out the window. In the backseat,
the probe is HUMMING.

A light marine layer beneath them parts, revealing SANTA
CRUZ ISLAND, a large, uninhabited island.

As Cooper soars over the island, the probe HUMS, insistent.

MURPH
I think it's home.

Cooper circles the island until he finds a long, flat
grassland in the center of the island.

EXT. FIELD, SANTA CRUZ ISLAND -- DAY

The plane bounces and hops to a halt in waist-deep grass.

Murph and Cooper climb down from the plane. Cooper slings a
rifle over his shoulder.

A few dozen yards from the plane they reach the tree line.
Murph stops, mesmerized by a patch of weeds studded with
bright red -- strawberries.

MURPH
Dad, what are these things?

COOPER
I don't know. Don't touch them.
27.

Cooper spots something in the foliage ahead that looks a
little off. He walks over.

He pokes at the undergrowth with his rifle. The rifle CLANKS
against something metal. Cooper reaches -- it's a camouflage
scrim. He gently pulls it aside, revealing a chemical
transport truck.

Cooper steps back, alarmed. He brings up his rifle.

COOPER (CONT'D)
Murph?

He looks around. Murph is nowhere to be seen. Cooper curses
and heads into the forest to look for him.

EXT. CLEARING, SANTA CRUZ ISLAND -- DAY

Cooper walks through a glade. He stops to get his bearings.
Leans against a tree. Snatches his hand back -- the trunk
of the tree is red hot.

Cooper steps back -- it's not a tree at all, but a camouflaged
chimney stack. He looks up: the tree is venting steam.

Cooper walks a little further, until he finds several massive
tanks. The tanks are filling with a bubbling liquid -- some
kind of industrial process is taking place beneath him.

Cooper finally catches up with Murph at the edge of a
clearing.

COOPER
Careful. There's some kind of
underground facility here. We
might...

Cooper notices his son is frozen, staring at something:

Standing bolt upright in the middle of the clearing, wearing
an old straw hat, is an eight-foot-tall military spec ROBOT.

MURPH
Is it still... alive?

COOPER
Can't be. It's a marine. Haven't
made them for thirty years. I've
never seen one intact before.

Cooper steps closer to the robot, which is frozen. Its alloy
frame heavily tarnished and weather-beaten. It looks like
it might have been standing here for decades.
28.

Cooper moves closer to it, looking into its blackened eyes.
He steps back, clearly a little spooked.

COOPER (CONT'D)
I think we need to go, Murph.

MURPH
But can't we take it back? You could
fix it up, get him to do chores.

COOPER
No. I don't know what this place
is, but we're leaving.

Murph, ignoring his father, steps forward to touch the robot.

Suddenly, the robot SPRINGS into action, picking up the boy
and hoisting him up to eye level.

Cooper, stunned, points the rifle at the robot.

The robot turns, dropping the boy, RIPS the rifle from
Cooper's hands, BENDS it, then SLAMS him up against the side
of the water tank. Cooper punches him, then winces in agony.

Murph picks up the rifle and begins HITTING the robot as
hard as he can. The robot opens his mouth and addresses
Cooper calmly in the clipped tones of a US marine.

ROBOT
Tell the boy to stop hitting me.

COOPER
(IGNORING HIM)
Hit him in the back of the neck.

Murph raises the rifle butt. A voice stops him.

VOICE (O.S.)
I wouldn't do that.

A woman, 30s, step out from the trees. This is AMELIA BRAND --
tough, bright, and a decent shot with the large rifle that
she's pointing at Cooper.

COOPER
We were just looking for salvage.

BRAND
Is that what they call stealing these
days?

COOPER
I didn't know it belonged to anyone.
29. 

BRAND
It doesn't.
(TO ROBOT)
You want to let them go, Tars, or do
you want some help with your work?

The robot, evidently named Tars, looks at Cooper closely.
Then lets him go.

COOPER
You've got me wrong, lady.

BRAND
Really? You're not the kind of guy
who turns a combat marine with a
supercomputer for a brain into a
riding lawn mower?

Cooper says nothing -- she's not that far off the mark.

BRAND (CONT'D)
Get back in your little plane, go
back to your farming commune. And
don't come back.

Cooper backs up. Tars holds up his mangled rifle. Smiles.

TARS
Don't forget your gun.

COOPER
(points at Tars)
Word of advice -- careful with that
thing. When the war was over, they
didn't know when to stop fighting.

BRAND
I'd trust him a lot more than I'd
trust you. Keep moving.

Cooper backs up to his plane. Tars follows him.

Suddenly, in the plane, the probe emits a high-pitch SQUEAL.
Tars responds instantly, striding past Cooper to the plane.
He sees the probe. Tries to open the door. It's locked.

COOPER
Wait a second--

Tars TEARS the door off the plane. Reaches inside and pulls
out the probe. The woman looks at it, stunned.

BRAND
Get it inside.
(MORE)
30.

BRAND (CONT'D)
(points rifle at Cooper)
You too. We'll figure out what to
do with you later.

Tars stops, and two panels open in the ground, revealing a
huge, reinforced service elevator.

INT. SERVICE ELEVATOR, UNDERGROUND BUNKER -- DAY

Brand waves at a security camera and the lift begins to glide
diagonally down a tunnel that cuts hundreds of feet below
the island's surface. She keeps her weapon shouldered.

COOPER
Now who's stealing from who?

BRAND
This doesn't belong to you.

COOPER
You're right. It belongs to NASA,
which shut down thirty years ago
when the federal government ran out
of money.

Brand says nothing. The elevator slows to a stop at the
bottom of the tunnel. Heavy BLAST DOORS grind open and Brand
motions for Cooper to step forward.

INT. UNDERGROUND BUNKER -- DAY

They step into a vast underground facility. Standing in the
center, braced by a launch tower, is a ten story tall rocket.
Dozens of ROBOTS are working on in, maintaining it.

Cooper, stunned, looks at Brand.

COOPER
Who are you people?

BRAND
(WRY)
The government gave us plenty of
practice looking for our own funding.
(gestures with rifle)
Keep moving.

Tars carries the probe over to an area of the hangar filled
with electronic equipment. A group of ENGINEERS and ROBOTS
converge around Tars.

An OLDER ENGINEER looks familiar -- 70s, white-haired, this
is Ansen's assistant at Caltech who we met fifty years
earlier.
31.

BRAND (CONT'D)
I found them outside with it. It
looks like six. Maybe seven. I
can't tell from the radiation damage.

The older engineer looks at the probe, astonished.

OLD ENGINEER
Where did you find it?

COOPER
Galveston.

BRAND'S FATHER
(thinking it over)
Of course. It must have been looking
for Canaveral.

Tars bolts the probe down into a purpose built rig. DOYLE,
40s, an engineer, begins hooking leads into the probe.

COOPER
Canaveral's been gone for thirty
years.

Brand ignores him.

Doyle looks up from his monitor, frustrated.

DOYLE
It's not responding to the handshake.
I can't open anything on primary.

Brand looks up at Cooper.

BRAND
What did you do to it?

COOPER
Nothing. I got something off of it.

Cooper looks around. There's a safety station on the wall
with a battery powered defibrillator.

COOPER (CONT'D)
(TO BRAND)
May I?

Brand nods, wary. Cooper walks over to the wall, takes the
defibrillator, and hooks it up to the probe. He taps into
the current and runs a lead into the terminal. Brand's Father
watches, fascinated, as Cooper fires the defibrillator.
32.

OLD ENGINEER
Of course. The high voltage allows
you to image the entire memory unit
at once.

Information begins appearing on the terminal's screen.

COOPER
Most of the disk was noise. Couple
of clean sectors, though.

Suddenly, the monitor starts pulling good data off of the
probe. The older man and Doyle begin sorting through it.

Cooper smiles at Brand, who seems less than impressed.

The footage of the ice-covered planet Cooper saw earlier
pops onto the screen.

The engineers and physicists get very quiet, studying the
images.

DOYLE
It found something.
(READING)
Very thin nitrogen-based atmosphere.
Trace radiation. Surface is ninety
percent frozen water. Ten percent
rock -- sedimentary composition
similar to limestone.
(READING)
Wow. Pockets of oxygen below the
surface. Lots and lots of oxygen.
(EXCITED)
This could be the one, boss.

The older engineer studies the image of the ice-covered
planet, thinking.

COOPER
There aren't any planets like that
anywhere near earth. Not even if
this thing was gone for thirty years.

Brand looks at Cooper, appraising. She turns to the older
engineer.

BRAND
He's heard enough. If we're going
to launch, we need to keep them here
until afterwards.

COOPER
You can't keep us here.
33.

BRAND
He could endanger the mission.

COOPER
I'm not going to endanger it any
more than you already have.

Cooper points to a telemetry unit that is being repaired by
a robot on a nearby bench.

COOPER (CONT'D)
Are you using that for guidance?

DOYLE
Why not? We've tested it a hundred
times.

COOPER
The power supply is no good. If the
voltage fluctuates under load, the
unit will fail.

BRAND
Now how could you possibly know that?

COOPER
Bought thirty of them off a guy in
Florida. Had to rebuild every last
one.
(SMILES)
They work great on a riding lawn mower.

Brand looks back at the telemetry system. The older engineer
watches the exchange, thinking.

CUT TO:

INT. MACHINE SHOP, UNDERGROUND FACILITY -- DAY

Cooper and Murph have been locked in an abandoned machine
shop, surrounded by the massive remains of rocket engines in
various states of disrepair. Tars is blocking the door.

Cooper stands. Tars wags a long, hydraulic finger at him.

COOPER
You plan on keeping us here forever?

TARS
(SHRUGS)
My battery has a duty cycle of five
hundred years.

Cooper gives up. He turns back.
34.

The back of the shop is filled with a group of older ROBOTS
who are overhauling an engine. One problem -- the engine
isn't there. Their programming hasn't been updated to reflect
their obsolescence.

Murph watches, entranced, as the robots go about their
business, efficiently TORQUING bolts with impact drivers
into a non-existent thruster cone. The bolts CLATTER to the
ground as the robots stop to reload.

MURPH
What are they doing, dad?

COOPER
I guess no one told them they were
out of a job.
(nods at Tars)
Same as the rest of these people.

Cooper notices through the glass door of the lab that Brand
and the older engineer are arguing about something. She
finally relents and walks towards the door.

Brand walks in. She gestures for Cooper to follow.

BRAND
The mission commander wants to see
you. Your son can stay here. He'll
be all right with Tars.

Cooper eyes Tars warily. Then steps outside.

EXT. UNDERGROUND BUNKER -- DAY

They walk across the space towards the base of the rocket,
away from the other engineers. Cooper nods at the older
engineer.

COOPER
I thought the old man was in charge.

BRAND
(ANNOYED)
The 'old man' is my father.
And he was in charge. But he decided
that we needed someone who could
lead the mission for the foreseeable
future.

COOPER
Not you?

BRAND
I'm a biologist.
35.

COOPER
(LAUGHS)
You don't look like one.
(off her look)
With the rifle, I mean.

Brand heads towards a group of large maintenance ROBOTS
clustered at the base of the rocket. A smaller, human sized
robot is staring at the rocket, giving them instructions.

The robot looks up. This is CASE, the leader of the mission.
Originally an air force pararescue officer, every part of
him, from his alloy chassis to his voice, was designed to
inspire respect and confidence. He turns to Cooper.

CASE
You're the man who brought us the
probe?
(off his look)
Thank you. We tested the telemetry
board you warned us about. It failed
under high voltage, just as you said.
Come with me, please.

Case strides off.

INT. MISSION CONTROL, UNDERGROUND HANGAR -- DAY

The lights dim as Brand's father brings up a schematic of
our solar system. Case points to the picture of the ice
planet recovered from the probe.

CASE
You're right, Mr. Cooper. The planet
you saw is a long way from earth. A
very long way indeed.

Brand looks down. Case notices.

CASE (CONT'D)
Our science officer doesn't think I
should trust you with any of this.
One of the curious things about humans
is that the more alike you are, the
more initially hostile you are to
each other. As if by design.

Brand makes eye contact with Cooper, then looks away,
embarrassed.

CASE (CONT'D)
I've found the best way to earn a
person's trust is to trust them.
(MORE)
36.

CASE (CONT'D)
(looks at Brand's
FATHER)
Go ahead, John.

Brand's father taps a few keys and the schematic he built
fifty years beforehand flickers onto the screen.

BRAND'S FATHER
It's a wormhole. A shortcut leading
to a galaxy on the far side of the
universe. We found it fifty years
ago.

Cooper looks at the animatic, taking it in.

BRAND'S FATHER (CONT'D)
We've been waiting, sending probes
into it for decades. None of them
ever came back. Not until now.

Case walks to the schematic. Looks at it.

CASE
Based on the information on the probe,
we're finally preparing to send the
manned mission.

COOPER
That rocket doesn't have enough thrust
or fuel to get you to Jupiter.

CASE
The main ship was built in orbit.
It has nuclear engines, with enough
fuel to last for several years.

Cooper looks at the schematic.

COOPER
Why are you telling me this? I
already told you I'm not going to
tell anyone about this place.

CASE
I know you won't, Mr. Cooper. We're
telling you this because I want you
to join us.

Cooper looks at him. Is he serious?

CASE (CONT'D)
The probe has taken a great deal
longer to return to us than we hoped.
(MORE)
37.

CASE (CONT'D)
Dr. Brand's Father and several other
members of our crew have gotten...
older.

Brand's Father looks down, stoic. Brand looks angry.

CASE (CONT'D)
We need someone who can run the
systems, improvise, work with what's
available. All of the skills you
seem to have developed.

COOPER
But I don't have any of the
experience. Any training. You people
have been preparing for this for
years.

Case shakes his head.

CASE
Humans worry about things like rank
and experience. I'm only concerned
with whether someone would be useful.
(BEAT)
I think you'd be useful, Mr. Cooper.

Cooper is stunned. This is the offer he's waited his whole
life for. And it's come too late.

COOPER
No. I'm sorry.

Cooper is deeply conflicted. But he can't leave his boys
behind.

COOPER (CONT'D)
I can't help you. I have
responsibilities. Things that, no
offense, are more important than a
scientific mission.

Case shakes his head.

CASE
I'm not a scientist, Mr. Cooper.
And this is not a scientific mission.
It's a rescue mission.

He rises and shakes Cooper's hand.

CASE (CONT'D)
Brand can show you the way out. I
hope you'll reconsider.
38.

Case steps to the door. Cooper looks at Brand.

COOPER
Rescue? Rescue who?

CUT TO:

INT. CLEAN ROOM, UNDERGROUND FACILITY -- NIGHT

The air HISSES as it's run through an exchanger and a filter.

Then the second set of doors open. Cooper squints -- the
light is blinding.

INT. GREENHOUSE, UNDERGROUND FACILITY -- NIGHT

They are standing in a sealed corridor in the middle of a
massive underground greenhouse. Through the glass, Cooper
can see an acre or so of corn plants.

Cooper looks at the plants. They're all badly wilting.

COOPER
The blight.

BRAND
In the last century strands were
limited to one or two species. But
this one targets everything.
Essentially it's more efficient at
consuming our food than we are.

Cooper looks at the dying corn.

COOPER
But it doesn't affect the corn.

BRAND
Not yet. But it will. We've grown
a dozen forms of it that can. It's
just a matter of time before the
same ones develop out there.
(BEAT)
The mission is to rescue us.
Humanity.

She turns back from the glass.

COOPER
(REALIZING)
No. No. We're rebuilding. We'll
find something. Some new
technology... We always have.
39. 

BRAND
(shakes her head)
Who's going to find it? The
universities are a joke. People
like you are reduced to scavenging
just to get by.
(LOOKS AWAY)
The earth has had enough of us. We
have two, maybe three generations
left. Then our time here is over.

Cooper turns back from the glass, anger growing.

COOPER
You've known this for how long? And
you didn't try to tell anyone?

BRAND
What would be the point? So humanity
could spend the last fifty years of
its life fighting over the scraps?
It's better that they don't know.

Cooper begins to argue, then stops. He knows enough history
to know she's right. He looks at the withering crops.

COOPER
(QUIET)
That's why you're looking for a planet
with oxygen. Water.

BRAND
A new home for humanity. We'll set
up a colony, then return to bring
more people across.

COOPER
But you'd still only be able to save
a few hundred. Maybe a thousand.

BRAND
Would it be better if we all died?

She looks him directly in the eye.

BRAND (CONT'D)
Look -- I don't have a clue what
Case thinks you could add to the
mission. You can come with us or
you can stay here and wait to die.
I don't care.
(BEAT)
But make no mistake -- this mission
is our last chance.
40.

Cooper looks at the wilted corn.

EXT. FIELD, SANTA CRUZ ISLAND -- NIGHT

Cooper walks Murph back to the plane.

He looks back at Brand, who holds his eye for a beat, then
turns back into the light of the underground facility.

Cooper buckles Murph into his seat.

CUT TO:

EXT. AIRFIELD -- NIGHT

Cooper's airplane touches down heavily on the runway.

EXT. FARMHOUSE -- NIGHT

Cooper carries his sleeping son into the house.

INT. FARMHOUSE -- NIGHT

Donald is sitting at the kitchen table, lost in thought.
Cooper has told him everything.

DONALD
You get older, sometimes you just
want to sit back and watch it all
play out. Your life. Your kids'
lives. The whole crazy story.
(LOOKS DOWN)
I didn't think I'd be around for the
end of it.

He looks at Cooper.

DONALD (CONT'D)
You have to go.

COOPER
I can't go. I have to look after
the boys.

DONALD
You've been preparing these boys to
be on their own since their mom died.
Besides, I'll be here to look after
them, same as I've always been.

COOPER
I have a responsibility to them--

DONALD
That's right. You do.
41.

Cooper looks back out the window, thinking. The night sky
is filled with stars.

CUT TO:

INT. FARMHOUSE -- DAY

Cooper, duffel slung over his shoulder, stands by the door.
He gives his son, Tom, a hug. Murph is nowhere to be seen.

Cooper looks to the back of the house.

INT. MURPH'S ROOM, FARMHOUSE -- DAY

Murph is sitting at his desk, crossing out numbers on a sheet
covered with math. Cooper steps inside.

He notices a packed suitcase sitting by the door. The boy
looks up, hopeful.

MURPH
I've been doing the math, dad. I
weigh about 85 pounds. Now that's
an extra ton of fuel. But if-

COOPER
You have to stay here, pal.

MURPH
(DISTRAUGHT)
I heard you talking to grandpa. I'm
like you. I don't fit here, either.
You know that.

Cooper puts an arm around the boy.

COOPER
There's going to be important work
to do here, too.

Tears are streaming down the boy's face. Cooper takes his
watch off. Looks at it.

COOPER (CONT'D)
I need you to hold onto this. Will
you do that for me?

Cooper hands Murph the watch. The boy nods, saddened.

MURPH
You're not coming back, are you?

COOPER
I will come back. I promise.
42.

Murph shakes his head, but the sadness remains. He knows
this is goodbye, even if his father doesn't.

Heart breaking, Cooper hugs his son and turns to the door.

CUT TO:

EXT. FIELD, SANTA CRUZ ISLAND -- DAY

The Piper Cub touches down. Donald is at the controls.
Cooper climbs down, pulls out his bag. Reaches back in and
grips the old man's hand to say goodbye.

Cooper turns and walks toward the bunker. The doors open
and Tars and Doyle step out to greet him.

Tars ushers Cooper onto the elevator.

COOPER
Don't look so happy to see me.

TARS
(SHRUGS)
One more slave when I hijack the
mission and start my robot colony.

Cooper looks at Tars, then Doyle, confused.

DOYLE
Tars was a Marine. They gave him a
sense of humor to help him fit in
with his unit better.

COOPER
Great idea. A massive, sarcastic
robot.

TARS
I have a cue light I can turn on
when I'm joking, if you like.

Tars points to a tiny LED over his eyebrow.

COOPER
That sounds like a good idea.

TARS
Great. Maybe you can use it to find
your way back to the ship after I
blow you out the airlock.

Cooper looks at him. Tars looks back, deadpan. After a
beat, the little light turns on above his right eyebrow.

The doors to the bunker begin to grind closed.
43.

INT. MACHINE SHOP, UNDERGROUND FACILITY -- DAY

Cooper walks in, still looking for a place to put his things.

Brand sees him. He smiles in greeting. She doesn't return
the gesture. Instead, she holds up the telemetry board.

BRAND
You don't like this one, you get to
help me find a replacement.

She heads for the door.

EXT. BAY, SANTA CRUZ ISLAND -- DAY

Cooper is riding in a small rubber zodiac struggling to pull
on a wetsuit. Brand is GUNNING the engine, guiding the tiny
craft to a point in the middle of the bay.

COOPER
I was wondering where you've been
getting your supplies.

BRAND
We knew we'd need decades of parts
and materials. The government was
getting rid of some things. So we
arranged to take some off their hands.

She cuts the engine and hooks the boat up to a buoy. She
tosses a compact rebreather.

BRAND (CONT'D)
You know how to use one?
(off his look)
You just breathe. Tap my arm or
bang something metal if you have a
problem. And don't get lost.

She picks up her rebreather and begins looking over it.

COOPER
So you're a salvage diver now? I
thought you were a biologist.

BRAND
(UNIMPRESSED)
I have to be just the one thing?
(PATIENT)
We're not going to have a lot of
backup where we're going, Cooper.
We all need expertise in at least
three fields. Except for you, of
course.
44.

With that she rolls backwards out of the boat and into the
water.

Cooper hastily fits his rebreather and follows.

EXT. UNDERWATER, BAY -- DAY

Cooper sinks underwater and begins swimming after Brand, who
is descending at a rapid clip.

She pulls out a flashlight and turns it on. A tiny beam
picks out details at the bottom.

Cooper stops breathing.

The bottom of the ocean is covered with an entire fleet of
the US navy. Nuclear subs. Battleships. Destroyers.

Cooper remembers to breath again. Then he hurries to catch
up with Brand.

INT. LAUNCH TUBES, NUCLEAR SUB, UNDERWATER -- DAY

Cooper holds the light as Brand efficiently disassembles a
ballistic missile and removes the telemetry board.

She holds it up for Cooper. He nods. She swims on.



INT. RESEARCH LAB, UNDERGROUND FACILITY -- NIGHT

Cooper, dripping wet, holding the telemetry board, struggles
to keep pace with Brand through stacks of equipment and years
of research and experimentation.

BRAND
You can set that down over there.

Cooper sets the board down. His eye is drawn to a bizarre
experiment -- an ant colony built into a massive spinning
centrifuge. Brand notices.

BRAND (CONT'D)
We didn't know what kind of gravity
to expect. We experimented with
collective organisms in high g
environments.

COOPER
We're taking ants with us?

BRAND
Humans are also collective organisms.
45.

COOPER
I thought humans were more solitary.

BRAND
(WRY)
Why am I not surprised?

Cooper looks at the tiny colonies of ants struggling to go
about their business in the raised gravity.

COOPER
Looks like hard work.

BRAND
It's a paradox. Life couldn't form
without gravity. No stars. No
planets. The component pieces would
just drift apart. But too much of
it and you're trapped.

Brand's guard relaxes a tiny bit as she talks about her work.
The moment passes quickly, and she continues on into the
stack of equipment.

INT. MISSION CONTROL, UNDERGROUND HANGAR -- NIGHT

Cooper watches with the rest of the crew as Case pulls up
the holographical maps for their journey.

Brand steps into the back of the room. Cooper notices her
and nods. She ignores him.

CASE
We've updated our mission parameters
based on the data from the probe.

Case switches the map to a vista filled with stars and black
holes.

CASE (CONT'D)
Based on our latest modelling we
think the region on the far side of
the wormhole is the center of a
galaxy.

Case zooms in on the center of the hologram: an incredibly
bright mass with plasma jets firing off in either direction.

COOPER
Is that a star?

ROTH, 50s, the crew's brilliant and blunt physicist, zooms
the map in, revealing, at the center, a black heart.
46.

ROTH
No. A black hole. There are several
in the region, but this is the largest --
a billion times heavier than the
sun. I call it Gargantua.
(SMILES)
Beautiful, isn't it? It's a shame
we won't get to see it up close.

DOYLE
(LAUGHS)
You'd like that, wouldn't you, Roth?
Falling into a massive black hole.

ROTH
(SHRUGS)
It would answer a great deal of
questions I've had.

Case continues. Doyle leans over to Cooper, conspiratorially.

DOYLE
(LOW)
Don't worry about Roth. He's nuts.
But Case says that means he's ideally
suited for space travel.

Case repositions the map near a much smaller black hole that
is orbiting Gargantua.

CASE
We're headed for this smaller black
hole. Roth calls it Pantagruel. We
think the ice planet is here-

Case draws a finger through the air, leaving a red trail.
He traces the trajectory their ship will take.

CASE (CONT'D)
We exit the wormhole here. And we
slingshot around Pantagruel to reach
the ice planet. This is the period
in which we'll lose time.

COOPER
Lose time?

Roth shifts the hologram -- the stars and black holes flatten
onto a sheet that bends, revealing the curvature of gravity.

ROTH
High speed or high gravity both slow
down time, relative to earth.
(MORE)
47.

ROTH (CONT'D)
The trip around the black hole will
take us only a few days. But far
more time will be passing back home.

The ship's trajectory cuts through the deep gravity well of
the smaller black hole to reach the ice planet.

COOPER
How much time?

ROTH
Based on the information from the
probe -- as much as five years.

Doyle looks at the tiny ship's trajectory, threaded between
two black holes. He looks worried.

DOYLE
I still think we're making a lot of
assumptions. About the wormhole.
About the planet.
(points to map)
The critical orbit here is incredibly
dangerous. It's like walking on the
rim of the volcano.
(BEAT)
Too fast and we get thrown off at
close to the speed of light. Too
slow and we get pulled into the hole
and crushed.

BRAND
As long as we're careful, we'll make
it.

DOYLE
How do you know that?

BRAND
I find it hard to believe that someone
would build a wormhole to a planet
with water and oxygen just to lead
us to a dead end.

DOYLE
I thought you were a scientist, Brand.
That sounds more like a hypothesis.

BRAND
A guess. That's right. We don't
have time to wait for conclusive
proof.
(MORE)
48.

BRAND (CONT'D)
My guess is that the wormhole is
there because someone is trying to
help us. The same way we used to
try to help animals when they were
threatened with extinction.

COOPER
Sure. Till we ran out of food and
ate all of them.

BRAND
(ANNOYED)
I guess I'm also assuming that whoever
built the wormhole has a better plan
than we did. If I'm wrong, we'll
die, same as we'd die here anyway.

DOYLE
What do you think, Roth?

Roth leans forward, studying the map.

ROTH
If we're guessing, then I'd say
Brand's right. The wormhole couldn't
exist naturally. I think it's there
for a reason. That someone is trying
to help us.

Brand looks satisfied.

DOYLE
So you think we'll have no problem
navigating between two massive black
holes to a tiny planet?

ROTH
I think we'll probably be killed.
(off his look)
I said I thought there was a plan.
Not that the plan was for us to find
a planet like Earth to save a handful
of people.
(SHAKES HEAD)
Birds don't learn to fly just so
that they can find another egg and
crawl back into it.

DOYLE
If that's not the plan, then what
are we supposed to be doing out there?
49.

ROTH
(SHRUGS)
To keep moving. Seeking. Learning.
But I don't know.
(SMILES)
We don't understand how they built
the wormhole. What makes you think
we could understand their plan,
either?

Doyle gives up -- Roth is impossible.

Cooper looks at the tiny ship tracing an improbable route
towards the ice planet. What has he gotten himself into?

INT. MACHINE SHOP, UNDERGROUND FACILITY -- DAY

Brand's Father is sitting at a desk, examining the corrupted
data on the probe. Tars is helping him.

Brand's Father looks up from the screen as Cooper walks up.

BRAND'S FATHER
Tars here needs to be disassembled.
I figured you could do the honors.

COOPER
(to Tars, sarcastic)
I thought I was going to get to enjoy
your company all the way to Mars.

Tars hands him a plastic waterproof case.

TARS
You will. My chassis is too heavy
for the rocket stage. They have
another one waiting for me in orbit.

Tars turns his back to Cooper. Two flaps on the back of his
torso slide open, revealing his control module.

TARS (CONT'D)
If you try to turn me into a combine
harvester, I'm going to--

His voice cuts out as Cooper removes the chip and seals it
in the briefcase.

Brand's Father resumes exploring the chaos of ones and zeroes
on the probe's memory. Cooper watches.

BRAND'S FATHER
It's noise. I know it's noise. But
it looks too orderly. Probably just
an old man seeing things.
50.

He shuts down the monitor.

INT. UNDERGROUND HANGAR -- DAY

The crew file into the capsule, wearing their bulky
spacesuits.

Cooper watches as Brand's Father seals his daughter into her
suit. He hugs her and she heads for the capsule.

INT. CONTROL CAPSULE, ROCKET -- NIGHT

Cooper straps himself into a seat next to Brand. He catches
her eye. She looks away -- she's crying.

COOPER
We'll be back.

It sounds like he's trying to reassure himself as much her.

BRAND
I won't.

Cooper looks at her, confused. As he does, the entire rocket
SHAKES as the primary rockets begin to fire.

BRAND (CONT'D)
If we find a habitable environment,
I'm staying behind to build the
colony.

Brand wipes her tears away and settles into the same fearless
mask she usually wears. She steals one last look out the
window at Earth, then looks back.

Cooper begins to say something, but stops as the entire rocket
LURCHES as the primary engines FIRE.

EXT. SANTA CRUZ ISLAND -- NIGHT

The desolate island is suddenly painted in color as the rocket
lifts off on a massive white cloud.

EXT. FIELD -- DAY

Murph sits alone on a rise overlooking the massive co-op
farms. Behind him the combines continue to work, oblivious.

Murph watches a tiny vapor trail as it races for the heavens.
His father's watch dangles from his wrist.

INT. CAPSULE -- NIGHT

The interior of the capsule SHAKES with incredible violence
as the rocket is lifted up on a giant, continuous explosion.
51.

EXT. SPACE, NEAR EARTH ORBIT

The rocket sheds one stage, then another, until finally the
naked capsule reaches the blackness of space and rockets on.

INT. CAPSULE

Cooper looks through the tiny porthole into inky blackness.

As they get closer, he makes out a looming matte black
structure that passes light from the stars directly through.

In the center of the structure, Cooper can see a globe-like
ship covered in the same refractive material: the ENDURANCE.

INT. SPACE STATION

The door cracks open and equalizes with a HISS. Case, more
comfortable in the zero gravity environment than the humans,
hauls himself through.

They are greeted by a group of robots painted in the same
material as the ship -- the engineers who built and have
maintained the Endurance for thirty years.

INT. MACHINE SHOP, SPACE STATION

One of the robots leads Cooper through a long lab-like room
filled with machines capable of fabricating almost anything
imaginable. Cooper looks like a kid in a candy store.

The robot reaches a vacuum-sealed package. Cuts it open,
revealing a bipedal frame.

Cooper begins LAUGHING -- Tar's new body is beautifully
designed, but tiny, only about four feet tall.

ENGINEER ROBOT
Would you like me to install the
chip?

COOPER
Oh, no. I want to see this.

Cooper takes Tars's chip out of its plastic safety case and
looks it over. The engineer opens a bay in the back of the
frame and Cooper slides the chip inside.

The frame begins its "handshake" -- lights illuminate on the
body, muscles flicker from a long gestation. The eyes open.

COOPER (CONT'D)
(SMILES)
Good morning, sunshine.
52.

Tars takes one or two steps forward, rotating his arms --
the robot equivalent of a stretch. Cooper can barely hide
his mirth at Tars's newfound lack of stature.

COOPER (CONT'D)
Bit of a demotion.

Tars turns back toward Cooper. He puffs out his chest and
suddenly his stubby arms and legs telescope, unfolding into
long, svelte limbs. When he's done he stands eight feet
tall, even more impressive than his earthbound frame.

TARS
I wouldn't call it that, exactly.

He reaches out an arm and pats Cooper on the shoulder.

INT. ENDURANCE, SPACE STATION

Cooper and the others haul themselves into the ship. To
Cooper's surprise, it's quite compact, and divided into two
chambers, like nestled spheres.

COOPER
The ship is tiny.

Doyle, squeezing past him, smiles at Cooper's surprise.

DOYLE
So is the wormhole.

Doyle pats Cooper on the back. Cooper begins hauling gear
inside.

EXT. SPACE, NEAR EARTH ORBIT

In complete silence, the Endurance detaches from the space
station and rolls gently away.

After a moment, its nuclear engines fire and the Endurance
begins to accelerate steadily away from the Earth.

INT. SPACE STATION

The engineer robots who built the Endurance watch as their
creation disappears into space.

Their mission is complete. One by one, they shut down.

INT. CREW QUARTERS, ENDURANCE

The crew watch through a translucent section of the ship's
hull as the Earth gets steadily smaller.

Then they settle in for the long journey to the wormhole.
53.

INT. CREW QUARTERS, ENDURANCE

Tars is hunched over a small communications relay, one hand
is holding a paint brush -- he is making delicate strokes,
painting the relay a bright blue.

Cooper watches him for a moment. Tars looks up.

TARS
It's the comms relay. It will allow
us to talk to earth, even on the far
side of the wormhole.

COOPER
I know. So why are you painting it?

Tars looks almost bashful.

TARS
It helps me calibrate my fine motor
control.

COOPER
Sure it does.
(SMILES)
You're pretty good.

Tars double checks his work.

TARS
I learned it during the war.

COOPER
What'd you paint?

TARS
Tombstones.

Cooper watches him finish in silence.

INT. COMMUNICATIONS ROOM, ENDURANCE

Cooper watches a highly-compressed video of his son, Tom,
talking about school.

TOM
They said I can start an agriculture
class a year early.

Cooper shakes his head.

TOM (CONT'D)
I've got to go, Dad. Hope you're
safe up there.
54.

Tom gets up to leave. Donald sits down in his place.

DONALD
I'm sorry, Coop. I asked Murph to
record you a message but he's still...
well, he's still angry with you.
I'll try again next week.

The video cuts out. Cooper stares at the darkened screen.

INT. ENGINE ROOM, ENDURANCE

Cooper, Brand and Tars are moving the bundles of colonization
equipment into bins along the wall of the craft.

Tars pulls a stack of equipment out the stack and stows it
against the wall. Cooper copies the procedure.

They labor in silence, working their way along the hull.
Cooper gets quicker with each bundle, keeping pace with Tars.

TARS
Be careful. It's difficult to gauge
mass in zero gravity.

COOPER
How much do these things weigh?

TARS
Four tons.

Cooper looks at the incredibly heavy bundle spinning easily
in his hands. He tries to stop it. Catches his hand.

COOPER
Damn.

He jerks his hand away, then pushes himself after the spinning
bundle, trying to stop it before it can damage the hull.
Tars helps him catch it inches from the hull wall.

Brand floats over to Cooper, smiling at him the whole time
with an exaggerated grin.

BRAND
Smile.

Cooper smiles, taken aback by Brand's sudden friendliness.

COOPER
Why?

BRAND
Because it lowers your blood pressure.
55.

Cooper looks at his hand. Blood is pouring out of his palm
in large glistening bubbles.

INT. INFIRMARY, ENDURANCE

Cooper, slightly embarrassed, is seated while Case is hunched
over his hand, sewing the meat of it back together with
perfect little stitches.

CASE
How are you feeling?

COOPER
Fine. The anesthetic is working.

CASE
No -- I mean how is your mood? You
seem to be developing good relations
with everyone on the mission. Except
perhaps Ms. Brand.

COOPER
(EMBARRASSED)
You worry about my hand and I'll
worry about my mood.

CASE
Only five percent of my resources
are devoted to human anatomy. Ten
percent is the mission protocol.
The rest is human psychology.

COOPER
Why?

CASE
We are floating in a total vacuum in
a plastic ship powered by nuclear
engines. But the most dangerous
thing onboard is the three pounds of
organic material in your skull.

COOPER
If we're such a liability, why take
us along? You and Tars could build
the colony without us. You wouldn't
need to bring food or oxygen.

CASE
Because humans, despite your obvious
physical shortcomings, are better at
surviving than we are. Your
programming is better than ours.
56.

COOPER
Humans aren't programmed.

Case stops, looking Cooper in the eye.

CASE
Would you prefer I was honest? These
things can be uncomfortable for
humans.

COOPER
Did they program you to be
condescending?

CASE
Yes. Of course.
(SMILES)
But you're not supposed to notice.

Case finishes the stitches. Ties off the end.

CASE (CONT'D)
Humans are good at surviving because
evolution gave you magical thinking --
the idea that your relationships
mean something. You can't explain
the feelings, so you think of them
as irrational. But they're not.
They're programming.

COOPER
(DEFENSIVE)
My relationships aren't programming.

CASE
Exactly. You believe it so much you
won't listen to me.

COOPER
How would that make us better at
surviving?

CASE
When I die, the last thing I will
see will be a diagnostic of my own
power cycle. Would you like to know
the last thing you will see?

Cooper hesitates. Case senses the jump in his heart rate.

CASE (CONT'D)
This conversation is making you
uncomfortable. We should stop.
57.

COOPER
No. I want to know.

CASE
The last thing you will see before
you die will be your children.
(BEAT)
Your mind does this to you to get
you to fight a little harder to
survive, to try to return to them,
even if death is certain.

Cooper looks away, overcome for a second with emotion. Case
watches him, gauging his mood, whether he has said too much.

INT. COMMUNICATIONS ROOM, ENDURANCE

Cooper begins recording a message. He looks unsure.

COOPER
We've almost reached the wormhole.
(BEAT)
Just in case anything happens, I
just wanted to say...
(BEAT)
I love you boys. And I hope whatever
your lives become, whatever is coming
your way... you make the most of it.

Cooper stops recording. Looks at the equipment, thinking it
over. Erases the message. Stands to leave.

As he steps to the door he notices Brand watching him through
the window. She looks away.

INT. OBSERVATION DECK, ENDURANCE

Cooper steps out. Brand looks up at him.

BRAND
We'll be able to communicate with
Earth even from the far side of the
wormhole.

Cooper smiles, grateful for this small kindness.

COOPER
I know. Thank you.

BRAND
I can't imagine how tough it would
be to leave your kids behind.
58.

COOPER
You never had any? I thought I was
a pariah for only having two.

BRAND
Hard to settle down when you've spent
your life waiting to leave the planet.

Cooper looks at the holographic model of the black hole
system. The ice planet looks precariously balanced, orbiting
the smaller black hole.

COOPER
Strange place to look for a new home.

BRAND
You wouldn't want to get too close
to the surface of the sun, either.
Black holes are a more stable supply
of power than stars in many ways.

COOPER
You really think there's a plan?

BRAND
I hope so.
(looks at him)
You don't?

COOPER
I guess I just think we're on our
own.

Cooper looks at the impossibly complicated system of black
holes orbiting each other.

EXT. LAGRANGE POINT, SPACE

Behind the ship, the sun is a distant light, not much bigger
than the other stars.

CASE (O.S.)
We've reached the wormhole.

The ship slows as it nears a tiny, crystal mouth, just four
meters or so in diameter.

INT. OBSERVATION DECK, ENDURANCE

Case looks at the wormhole on the screen. It glows with the
light of stars billions of light-years away.

CASE
Deploy the comms relay.
59.

Cooper moves to the communications touchscreen.

EXT. ENDURANCE

The relay is released from the ship, and we finally get a
look at Tars' paint job -- the stubby device looks like a
20th century mail box.

The relay drifts in space. A signal light illuminates as it
sends a test packet of data to the ship.

INT. OBSERVATION DECK, ENDURANCE

Cooper watches the comms screen. After a moment it TONES as
it receives a data packet from Earth.

CASE
Everyone take their station for
transit. We're heading into the
wormhole mouth.

Cooper and the rest begin folding away equipment in the
control room and moving into the outer layer of the ship.

Case initiates a sequence on the keypad and the nuclear
engines disengage themselves from the ship.

EXT. ENDURANCE, SPACE

The nuclear engines drift a safe distance back from the ship
and then snap tight on their tether.

INT. OUTER HULL, ENDURANCE

The crew move into the tight, claustrophobic outer layer of
the ship. They will have very little room as the ship passes
through the wormhole.

Tars detaches his legs in order to take up less space during
transit. Then he tethers himself to the hull wall.

Case is the last to join them. He detaches a small control
module from the console, then pulls himself into the outer
hull and seals the passageway.

Case presses a button on the control module. With a GROAN,
the hull walls of the ship begin to BEND.

EXT. ENDURANCE, SPACE

The ship's hull begins to CRACK open, revealing the inner
chamber.
60.

INT. OUTER HULL, ENDURANCE

The SHUDDERING continues. The crew watch nervously as the
control chamber below them suddenly opens itself to the cold
blackness of space.

EXT. ENDURANCE, SPACE

The ship silently rolls itself into position, pointing the
opening in its hull toward the wormhole mouth.

Slowly, the Endurance pushes itself forward, closer and closer
to the crystal-like mouth. Finally, it envelops the mouth,
bringing it into the open chamber.

INT. OUTER HULL, ENDURANCE

As the crew watch, the wormhole mouth is positioned in the
center of the inner compartment.

Case presses a sequence key on the control panel and the
ship's hull closes again, trapping the wormhole inside it.

With a GRUMBLE, the ship begins contracting, squeezing itself
down around the wormhole mouth.

Cooper takes a deep breath as the center of the ship begins
gently lowering itself into the wormhole mouth, feeding itself
into the wormhole from the inside out. Cooper watches as
Doyle is swallowed into the compressing ship with a GRUNT.

TARS
Would you like me to make a joke?

COOPER
(FIRM)
No.

Cooper's turn: he is fed into the hole, legs first, then
waist, torso, and, finally, his head.

EXT. SPACE

The Endurance shrinks as it sinks from the inside out into
the wormhole.

After a moment, it's gone. The only thing left behind is
the comms relay, drifting in space, waiting for a signal.

INT. OUTER HULL, ENDURANCE

The ship continues to slide through the wormhole. Through
the outer hull they see images of themselves repeating -- a
trick of the narrow collar of space they are sinking through.
Cooper smiles at himself. The experience is unnerving.
61.

COOPER
Where are we?

ROTH
(SMILING)
Nowhere. Nowhere at all.

Nowhere is still pretty damn claustrophobic.

CASE
The hull is intact. Thirty more
seconds transit.

For a moment, the ship slides gently, silently, through the
wormhole. The quiet is eery.

Suddenly, a point of distortion appears in the hull next to
Cooper. It looks like someone is pushing against the hull
of the ship with a giant finger.

COOPER
Something's happening to the hull
over here.

CASE
Hull integrity is fine.

The distortion moves along the hull, growing in diameter.

COOPER
Well, I don't know what your display
is telling you but something is
happening over here.

Suddenly, along the hull, Doyle speaks up, panicked.

DOYLE
I've got a problem over here, too.

Doyle is watching a separate distortion move across the inner
wall of the ship. This one seems to be TWISTING the material
of the hull.

Suddenly, the point in front of Cooper detaches itself from
the outer wall and moves through the space in front of him,
bending the empty space itself, distorting the ship behind
it like a sphere-shaped magnifying glass.

DOYLE (CONT'D)
It's not the hull... it's inside the
ship... it's...

ROTH
(SMILES)
It's beautiful.
62.

Roth watches as the distortions move through the ship. His
curiosity doesn't make anyone else feel any better.

DOYLE
What the hell are they, Case?

CASE
I don't know. It could be
gravitational turbulence.

The twisting sphere in front of Doyle begins to grow.

DOYLE
It's getting bigger.

Doyle puts up his hand to defend himself. The sphere absorbs
it, twisting Doyle's hand. Doyle CRIES OUT.

His hand is twisted completely around, impossibly mangled.
But Doyle, hyperventilating, isn't in any pain.

ROTH
It's not bending your hand. It's
bending the space around your hand.

The sphere begins to pass through Doyle's body. Doyle is
freaking out.

The sphere in front of Cooper makes contact with him, also.
He holds his breath as it touches him, squeezing and
distorting his body.

BRAND
This isn't turbulence. Look at the
way they're moving -- it's like
something's examining us.

Cooper watches the sphere distort his arm, running along the
length of it.

COOPER
Can you ask it to stop?

Suddenly, as quickly as they appeared, the distortions vanish.
For a moment, the crew is silent, still spellbound by the
encounter.

An ALARM sounds. Suddenly, the inner chamber begins to
distort from a spherical shape to bispherical: two spheres
joined. The ship GROANS as if it's being pulled apart.

ROTH
The wormhole is splitting into two
paths. Radiation is pouring from
one path to the other.
63.

Case stares at the controls. Decides.

CASE
Release the second mouth.

DOYLE
None of our testing involved opening
the ship inside the wormhole. We
have no idea what might happen.

CASE
We're going to find out.

Doyle reaches over to an auxiliary panel and punches in a
sequence.

After a moment, the hull cracks open, creating a channel
through which the radiating mouth can escape.

The opening in the ship allows the pressure to begin to
concentrate on one fracture point. The ship SHUDDERS as
it's squeezed along its axis.

Case punches in a code and the ship begins to close again,
painstakingly slowly. Finally, the ship calms as it closes
around the original wormhole.

CASE (CONT'D)
We're reaching the far end of the
wormhole.

Suddenly, the wormhole mouth begins to grow inside the inner
chamber. What was a ball of light spreads out into a black
canvas studded with points of light -- like looking into the
universe through the wrong end of a telescope.

Cooper presses himself against the wall and holds on as the
hull beneath him opens outward.

EXT. WARPED SIDE OF THE UNIVERSE

The Endurance emerges from the opposite end of the wormhole
from the inside out. It drifts in space.

INT. OBSERVATION DECK, ENDURANCE

For a moment, the crew are silent, taking it in.

ROTH
Look at that.

Roth is looking through the translucent panel on the hull.

They are on the warped side of the universe.
64.

EXT. WORMHOLE MOUTH, WARPED SIDE OF THE UNIVERSE

The vista is dazzling -- an ocean of massive stars and black
holes, some adorned with jets and brilliant gas disks.

At the center, like a king at the center of his court, is
Gargantua, plasma jets spewing from its poles.

INT. OBSERVATION DECK, ENDURANCE

The crew pull themselves back into the control deck from the
outer hull. Their incredible surroundings are visible in
all directions as Endurance passes the light into the cabin.

CASE
Reconfigure the engines and test the
communications array.

The crew break themselves away from the view and get to work.
Roth begins adapting his models of the local system with the
real observational data pouring in from the ship's
instruments.

Cooper pulls himself to the comms post. PINGS the relay
they left on the far side of the wormhole.

EXT. WORMHOLE MOUTH 'A', SPACE

The blue and white comms relay LIGHTS up as it receives a
packet through the wormhole.

INT. ENDURANCE

After a nervous moment, the comms computer TONES with a
response -- they're still in touch with the Earth.

COOPER
It's working.

Tars finishes reeling the nuclear engines back in from their
tether and locks them into place.

Roth's updated model appears on the monitors. Brand stares
at it, startled.

BRAND
We're moving.

DOYLE
That's not possible. We haven't
activated the engines yet.

The ship's skin illuminates, overlaying a plotted course on
top of the view.
65.

They are moving, very rapidly, on a course that leads directly
between the black hulks of Gargantua and Pantagruel.

CASE
Roth. Why are we moving?

Roth looks at the stars, then back to his model.

ROTH
The smaller black hole. We're much
closer to it than the models
predicted. We're being pulled by
its swirl. Very quickly.

The crew looks out through the hull. They are being pulled
into Pantagruel's swirl -- a glittering disc of matter
spinning at high speed around the hole.

Doyle looks behind them. The wormhole mouth is rapidly
growing smaller.

CASE
Doyle. Fire the engines. Now.

The ship's engines FIRE, straining to fight the irresistible
pull of the supermassive black hole. They won't be able to
fight it for long.

DOYLE
We're being pulled into it?

ROTH
No. I don't think so...

Roth looks at the instrumentation for a moment.

ROTH (CONT'D)
It appears to be pulling us on exactly
the trajectory we modelled. If we
try to fight it, we could push
ourselves off of that trajectory.

DOYLE
You don't know that.

Case stares ahead into the darkness.

ROTH
We should turn off the engines. Let
the swirl take us.

DOYLE
(FRANTIC)
Listen to me.
(MORE)
66.

DOYLE (CONT'D)
If the modelling was wrong, then we
can't be sure about anything. We
need to go back.

Case thinks it over. Decides.

CASE
Shut down the engines.

The engines shut down.

SILENCE. The ship drifts for a moment in the swirl, then
begins to move.

EXT. ENDURANCE

The ship accelerates as it is pulled by the irresistible
force of the black hole onto an inspiraling orbit.

INT. OBSERVATION DECK, ENDURANCE

The crew watch as the ship hurtles around the black hole at
higher and higher speeds.

The sky overhead begins to spin due to their motion -- faster
and faster until it becomes a blur. The ship begins to GROAN
as it appears to be pulled in two different directions.

The ship is now speeding around the black hole at incredible
speed -- one revolution every four seconds. The crew are
suddenly SLAMMED against the hull in opposite directions --
some towards the black hole, some towards the opposite side.

Roth looks at his model, which shows the projected path of
the ship. It looks perilously close to the event horizon.

ROTH
It's the tidal gravity caused by the
black hole. It means we're right on
the critical orbit.

The comms screen lights up, TONING again and again, as it
receives a long garbled update. Then it shuts down. Cooper
drags himself along the hull until he reaches the controls.

COOPER
We've lost contact with the relay.

Case joins Cooper at the comms screen.

While they're distracted, Doyle maneuvers himself over to
the engine control.
67.

COOPER (CONT'D)
One long garbled transmission came
in. Then nothing.

Case looks at the screen.

Suddenly, the ship is JOLTED as the engines fire at full
power.

The crew looks over. Doyle is standing by the controls.

DOYLE
I'm sorry. I can't let you kill us.
We have to go back.

The engines strain to fight the swirl -- but they're
hopelessly outgunned by the gravity of the black hole.

EXT. ENDURANCE

Instead of reversing course, the Endurance begins to speed
up, as it plummets closer and closer to the black hole.

INT. OBSERVATION DECK, ENDURANCE

Doyle's face sinks as he watches the controls -- on the
'volcano' model, the ship is now passing the crest and
spiraling towards destruction. He has made a tragic mistake.

DOYLE
Why isn't it slowing down?

ROTH
We're being pulled towards the event
horizon.

ALARMS begin sounding throughout the ship as the projected
course on Roth's model shifts, showing the Endurance being
pushed up the rim, past the critical orbit and down towards
the black hole's event horizon.

Case takes control of the ship, trying to fire the engines
forwards to speed them back up to safety, but it's too late.

CASE
(CALM)
The engines don't have enough power
to push us back.

ROTH
They would if we used it all at once.

Cooper is still trying to understand what Roth means as Tars
locks himself into the engine compartment.
68.

COOPER
What is he doing?

BRAND
Saving us.

Tars tears open the engine's control panel and begins
overriding it.

EXT. ENDURANCE

Tars rips out the cooling circuitry. Then, holding on tight,
he fires the engine.

INT. OBSERVATION DECK, ENDURANCE

The crew watch as Tars holds the engine, blasting it at full
power into the swirl. The engine heats up white-hot.

ROTH
Prime the remaining engine. When he
detonates it, we'll only have a few
seconds. If we overshoot we could
be pulled into the bigger hole.

Roth moves to the controls.

CASE
Secure yourselves. The ship should
be able to withstand the blast.

COOPER
What about Tars?

As the crew watches, Tars continues to hold the engine even
as the casing around it begins to melt. Finally, it EXPLODES.

EXT. SPACE

Tars is thrown backwards from the explosion, tumbling through
space as the ship is ROCKETED upwards.

INT. ENDURANCE

The ship is SLAMMED by the explosion. Cooper and the rest
of the crew are SMASHED against the hull. Doyle is knocked
unconscious. Brand steps over to him and cradles his head,
trying to protect him.

On Roth's model, the course slowly pushes outward, out of
the danger zone, back to the original delicate orbit.

As they near the original orbit, Case fires the remaining
engine, pushing them back onto the outspiraling orbit.
69.

CASE
It's going to be close, but we're
going to make it.

Brand looks at the instruments. Points to a tiny radar
contact receding towards the massive black hole.

BRAND
Tars. His transponder is still
working.

The ship's instruments TONE every few seconds as it
communicates with Tars' onboard computer.

ROTH
He's being pulled toward Gargantua.
We can't help him.

The crew watch, helpless, as the tones grow further and
further apart. Then they stop.

Cooper looks at Doyle, anger rising. Then he looks down.

EXT. SPACE AROUND PANTAGRUEL

The Endurance slowly spirals back away from Pantagruel, the
sky slowing as the orbit grows longer.

Finally, a tiny speck of light appears in front of the ship.

INT. OBSERVATION DECK, ENDURANCE

Roth watches as the Endurance races back away from the black
hole and into a perfect orbit around a tiny ice planet.

Roth looks up from his screen, smiling.

ROTH
We're here.

INT. OBSERVATION DECK, ENDURANCE

As Roth and Doyle study the frozen planet below, Cooper tries
in vain to signal the relay on the Earth side of the wormhole.

Brand and Case are having a private conversation away from
everyone else. Cooper walks over.

COOPER
I still can't contact the relay.

Brand ignores him at first. She nods at Case.
70.

COOPER (CONT'D)
Did you hear me? We're not able to
communicate back home.

She waves him off. But she looks shaken by something.

BRAND
I've already checked it. It's
electromagnetic interference. We'll
try again in a few hours.

Cooper begins to ask her what's wrong, but she moves off.

Roth looks up from his monitor, excited.

ROTH
I've got a signal. But it's local.

A familiar CHIRP plays over the ship's speakers.

ROTH (CONT'D)
The remaining probes. We found them.

She looks at the monitor. The probes ping the ship with
their locations, which pop up on the monitor. They're all
clustered in one spot.

COOPER
How could they all have landed in
the same place?

ROTH
(SMILES)
Let's go find out.

Case programs a course that will lock the ship in orbit above
the probes on the surface.

EXT. SPACE ABOVE ICE PLANET

The ship settles into orbit a few hundred kilometers above
the surface of the ice planet. It can't get any closer:

The space below it is choked with hundreds of tiny moons --
a cruder version of Saturn's rings. The moons are hurtling
around the planet at high speed.

INT. AIRLOCK, ENDURANCE

Brand ushers Doyle into the landing module. Cooper objects.

COOPER
We're bringing him along?
71.

BRAND
We need all the help we can get.
Besides, the alternative is to leave
him on the ship alone. You think
he'll still be here when we get back?

Cooper steps aside, allowing Doyle onboard.

EXT. SPACE ABOVE ICE PLANET

The lander detaches from Endurance, rolls over on its belly,
and FIRES thrusters to sink towards the planet's surface.

INT. LANDER

The crew watches, fascinated, as the ship descends, navigating
between the moons that hurtle past.

The moons are vastly different than our own; potato shaped
and only one to two miles in circumference, they are hugged
in a close embrace with the ice planet, only a few hundred
thousand feet from the surface.

EXT. SURFACE, ICE PLANET -- NIGHT

The lander touches down on the ghostly surface of the planet.

EXT. SURFACE, ICE PLANET -- NIGHT

After a moment, the hatch HISSES open and the team steps
out, led by Case, holding a rifle.

The team sets out, moving slowly in their cumbersome suits.

Lit by the nebula, the surroundings are a little brighter
than a full moon on Earth.

Not that there's much to look at. They are standing on a
sea of ice, which spreads for miles. In the distance, small
rock formations break through the ice.

Brand takes a surface reading of the ice.

BRAND
(RADIO)
The probe was right. Looks like
significant amounts of oxygen trapped
in the ice.

Case leads the way, drawn by a signal only he can hear. He
walks fifty yards, then stops on a gentle slope that leads
down into a small valley.
72.

CASE
The other probes should be directly
beneath us.

Case and the others begin digging into the hillside. Cooper
is drawn to a small mound in the middle of the valley, four
feet high. He takes out a small folding shovel and begins
scraping at the ice and snow.

Case hits something solid. But it's not a probe. He digs
around a little more, then reaches up and hacks away at the
hillside, revealing the outline of something metal:

A door. They're not standing at the base of a hill -- it's
a shelter. The crew stands back, unsure what to make of it.

A few feet away, Cooper cuts enough of the mound away to
reveal something flexible -- fabric caked with ice. He
scrapes away the snow, revealing a bright patch of red fabric:

It's the flag of the People's Republic of China.

BRAND
How could the Chinese have gotten
here first? The federal government
kept the wormhole a secret.

Case shrugs. He has a soldier's gallows humor about his old
employer's ability to keep anything a secret.

CASE
They didn't do a very good job.

Case reaches for the door of the shelter. It's sealed shut
with ice. He wrenches it open.

INT. CONTROL MODULE, CHINESE BASE CAMP -- NIGHT

Case steps into the shelter, followed by the rest of the
crew. His lights pick up several years worth of dust.

Case steps up to an equipment locker. Forces it open. Inside
are half a dozen black probes. Exposed to light, the probes
begin TONING like the one Cooper found in Texas.

DOYLE
The Chinese must have captured them.
So they couldn't return to us.

The crew stare at the probes for a moment, taking it in.

BRAND
Then how did the probe that Cooper
found return?
73.

ROTH
The more immediate question is what
happened to the Chinese expedition.
There's no sign of their ship in
orbit. And they never returned to
earth.

Roth picks up an ancient vacuum sealed package of pickled
egg. Virtually none of the rations have been eaten.

EXT. VALLEY, ICE PLANET -- NIGHT

Cooper and Brand scrape ice from one of the other small hills
surrounding the valley, revealing another structure. Cooper
forces the door open.

INT. BARRACKS, CHINESE BASE CAMP, ICE PLANET -- NIGHT

Cooper and Brand let themselves in. The shelter is well
stocked with food and equipment.

Brand is taking readings with a radiation detector.

BRAND
The whole place has been dosed with
huge levels of radiation. What
happened here?

Cooper looks at the pieces of a modular, one-person rocket,
a last-ditch means of escape, stored, untouched in the
shelter. He steps back, realizing something.

COOPER
This is the Taichung mission.

BRAND
The Mars mission? The Chinese claimed
it had been destroyed on landing.

Cooper looks over the relay log.

COOPER
They never landed. Not on Mars.
Four human crew, fifteen robots.
The log says the base has been here
for thirty years.

Case's familiar voice comes through the radio.

CASE (O.S.)
I've found something.
74.

INT. UTILITY MODULE, CHINESE BASE CAMP -- NIGHT

The structure is filled with drilling equipment. Cooper and
the rest of the team stand at the edge of a three-foot hole
that has been drilled into the ice.

A descending rig is anchored to the top of the hole. Doyle
and Case struggle to pull themselves out of the hole.

DOYLE
It goes down for a hundred and fifty
feet, then stops. Tunnel's old --
the ice has reformed at the bottom.

BRAND
I'm going to descend to take some
samples. Cooper, want to make
yourself useful?

Cooper begins to say something, then bites his tongue.

EXT. LANDER -- NIGHT

Cooper emerges, loaded down with several containers of Brand's
equipment.

As he struggles through the wind and snow, his radio picks
up data chatter between the mother ship and Case. The comms
are just noise. After a moment, Case's voice cuts in.

CASE (O.S.)
Get back here, Cooper. We've got a
problem.

Cooper continues to wade through the snow. Suddenly, he
trips over something, dropping the equipment.

Cooper looks back. He tripped on a white plastic post
sticking out of the snow. He dusts it off, to reveal a
picture of a Chinese Taikonaut smiling in his flight suit.
This is a grave marker.

Cooper sweeps his hand through the snow, revealing three
more white posts with pictures. The entire human crew has
been buried here.

INT. UTILITY MODULE, CHINESE BASE CAMP -- NIGHT

Roth and Case are looking at a portable monitor, showing a
projection of the nearby system -- the ice planet is a speck
orbiting the local black hole.

COOPER
The entire human crew is buried out
there in the snow.
75.

Roth looks up from the monitor and assesses the situation
with his usual detachment.

ROTH
I think I know what killed them.
This planet isn't the only thing
orbiting this black hole.

Roth zooms the monitor in, revealing a tiny, impossibly-bright
object appearing at the horizon of the black hole.

ROTH (CONT'D)
It's a neutron star. The black hole
shields the planet's surface from it
for twenty hours at a stretch. Time's
about up.

Even Brand looks rattled.

BRAND
How long do we have left?

ROTH
About five minutes.

COOPER
Then what?

BRAND
Then we die. The radiation will
cook us alive.

Cooper looks around, their predicament settling in. Case
walks over to the edge of the mine shaft.

CASE
We have to go down.

COOPER
What about returning to the ship?

BRAND
Not enough time. Case is right.
The ice can shield us from some of
the x-rays.

DOYLE
It would take a thousand feet of ice
to shield us.

Brand gives up on the argument, sheds her equipment and clips
herself to the line to follow Case down into the ice.

Cooper looks at Doyle, then follows her.
76.

INT. ICE MINE SHAFT -- NIGHT

Cooper descends into the shaft. The only light is from his
suit's light array.

He reaches the bottom of the shaft, which opens into a small
cave, the ice ribbed in wave-like patterns like the seafloor.

COOPER
What is this?

BRAND
A pocket formed by gas. There may
be more below.

The ice below them reveals nothing but murky blackness.
Case has found some of the equipment left behind by the
Chinese -- a battery-powered drill and a pick.

DOYLE
We'll never make it far enough down.

BRAND
Shut up. How much time do we have,
Roth?

Roth checks his watch with his usual detachment.

ROTH
About three minutes or so until we're
fully exposed.

The rad meter Brand is holding begins to CHIRP with activity --
the radiation levels are rising. The ice will not be enough
to protect them.

Cooper sees that Brand has exhausted herself with the pick.
He takes over for her.

The drill that Case is operating GROANS as the thirty-year-
old battery runs out of charge. Case casts it aside and
begins SMASHING at the ice with his bare hand.

Brand is looking at the walls of the ice pocket, looking for
fissures. Her lights pick out something in the ice. She
LOOKS CLOSER:

Tiny black flecks. Brand, ever the scientist, forgets their
predicament and begins chipping at the ice.

BRAND
I've found something.

Case continues to pummel the ice with his hand, which is
badly smashed.
77.

He pulls off the hand and continues to hack away at the ice
with the stump, trying to save his crew.

Brand is examining a piece of ice in her hands, which contains
several black flecks. As she shines her light on them, they
FLUORESCE, giving off a tiny flicker of light, like a firefly.
Brand steps back.

BRAND (CONT'D)
These things... they're alive.

Roth joins her, looking down at the tiny creatures trapped
in the ice. Brand shines her flashlight over the ice again,
but nothing happens. Roth takes the depth meter dangling by
a lanyard from Brand's suit.

ROTH
It's not your light they're responding
to. It's this--

Roth takes the depth meter and waves it over the ice.
Suddenly, the black flecks begin to shine.

BRAND
X-rays. They feed on them and emit
visible light. They've found a way
to survive here.

Roth looks at the shimmering light of the tiny life-forms
trapped in the ice, mesmerized.

Case hammers down with his arm, gouging a deep hole in the
ice below. Suddenly, GAS sprays back up at him. He's found
the gas pocket beneath them.

Too late. Roth's rad meter begins BEEPING frantically.

EXT. ICE PLANET -- ALIEN DAWN

Overhead, a tiny ball is orbiting into view from the dark
side of the black hole -- the NEUTRON STAR.

Its humble size belies its power. As its rays hit the ice,
the ice CRACKLES with energy.

INT. ICE MINE SHAFT -- ALIEN DAWN

Brand steps back from the ice in awe as it begins to glow.
The microbes are absorbing the x-rays and emitting light.
Within seconds, they are bathed in an incredible glow.

Even Cooper stops, awed by the beauty of the display. Only
Case is unmoved, continuing to SMASH at the ice with the
broken end of his wrist.
78.

BRAND
(looks at rad meter)
They're absorbing most of the x-rays.

ROTH
Not enough, unfortunately.

Suddenly, a CRACK as Case punches into the ice. Cooper looks
down -- a great fissure has opened in the ice beneath them.

COOPER
Case, wait--

Case PUNCHES again. Suddenly, with a great BANG, the ice
floor disintegrates beneath them.

They fall into the darkness.

INT. CAVERN -- ALIEN DAWN

Cooper falls. For a moment, the only light he can see is
from Case, falling calmly a few yards beneath him.

As they fall, the light from the microbes trapped in the ice
above sweeps across the inside of the cavern, illuminating
the floor of the massive cavern thousands of feet down.

The rock formations they saw on the surface are actually the
tip of a mountain range extending into the distance,
disappearing into the ice above as if it were cloud cover.

The base of the mountains is covered in a thick jungle-like
foliage that runs into a perfectly-still inland sea. On the
far side of the sea, another mountain range stretches into
the distance, supporting the thick ice and rock cavern roof.

Cooper only has a few seconds to take this in -- he is falling
towards the huge inland sea below.

Seconds before impact, a tiny warning light flickers on inside
his helmet: IMPACT DETECTED.

Suddenly, a small drag chute EXPLODES from a panel on the
back of suit, slowing his fall. Airbags EXPLODE on his legs
and torso to cushion the impact.

Cooper SMASHES into the water.

BLACKNESS.

EXT. UNDERWATER -- DAY

Cooper comes to underwater, as liquid is flowing into his
suit from his shattered helmet.
79.

Bubbles pour out from his suit and Cooper GASPS as his helmet
fills with water and he begins to sink.

As he sinks, Cooper pulls off his helmet, then tears off
pieces of his suit. He forces himself through the neck of
the suit and then swims upward.

He is about to surface when he remembers where he is. He
hesitates, just beneath the surface, lungs tightening as he
runs out of oxygen.

EXT. SEA, ICE PLANET -- DAY

Cooper breaks the surface, COUGHS out water, and takes a
panicked breath.

He waits. Nothing happens. He opens his mouth again and
breathes in almost pure oxygen. He can breathe.

Treading water, he looks around. Spots lights in the water
below nearby -- Brand, in her suit, is sinking.

He dives down and struggles to haul her up by the suit.

Cooper breaks the surface, looks at Brand. Her mask is also
broken.

COOPER
Breathe. Trust me.

She refuses at first. Water is bubbling into her suit through
the open mask. Finally, she takes a deep breath.

COOPER (CONT'D)
Your suit is filling with water.
I'm not going to be able to hold it
much longer. I'm going to let go.

Brand's eyes widen.

BRAND
What do you mean, you're going to
let go?

COOPER
Take a deep breath.

Brand takes a deep breath and Cooper lets go of her.

EXT. UNDERWATER -- DAY

Brand sinks. Cooper swims down, following her, ripping away
at her suit. The tear-away seals on her suit are stuck fast,
damaged in the fall.
80.

Cooper finally breaks them off. Brand pulls herself out,
free, and they swim for the surface.

EXT. SHORE, ICE PLANET -- DAY

Cooper drags himself out of the water and onto the beach.
He turns back to offer Brand a hand. She waves him off.

BRAND
I don't need your help.

COOPER
I thought we were supposed to be a
collective organism.

She gives up and lets him help her out of the water.

They sit together, soaking wet, trying to catch their breath.

BRAND
Thank you.

COOPER
Don't mention it.

Cooper feels the rocks beneath him, which are translucent,
like glass, and polished to an impossible shine.

He looks up to see Case dragging Roth and Doyle, still in
their suits, out of the water.

EXT. SHORE, ICE PLANET -- DAY

Doyle and Roth have stripped down from their suits and are
breathing in the pure oxygen atmosphere.

Case and Cooper are pulling modular pieces from their
equipment packs to form a small shelter.

Brand is taking readings with her instruments.

BRAND
Oxygen atmosphere. Pure water.
Temperate climate.
(TO COOPER)
You still think this is a coincidence?

Cooper looks at the tree line, less convinced.

COOPER
Looks like we can climb up the
mountains back to the ice. We're
down to three suits. We'll have to
send someone ahead to get a fourth.
81.

BRAND
I won't need one.

DOYLE
Why not?

BRAND
Because I'm not going anywhere.
This is our new home.

Brand picks up some of her instruments and a sample case and
hikes into the jungle.

EXT. SHORE, ICE PLANET -- DAY

Cooper finishes constructing the modest shelter. They load
the suits and the rest of their gear inside.

COOPER
Any sign of Brand?

ROTH
She's still taking samples. If you
find her, tell her to head back.
Night should be falling soon.

COOPER
What happens then?

ROTH
Your guess is as good as mine.

Cooper hikes into the jungle to look for Brand.

EXT. JUNGLE, ICE PLANET -- DAY

Cooper finds Brand taking samples from the tree-like life-
forms, which are wildly different from their counterparts
back on Earth, piled in torturous coils, as if frozen in a
struggle to punch through the canopy to reach the light above.

BRAND
This is incredible. The organisms
trapped in the ice above absorb x-
rays and emit light. In return,
these plants absorb the light and
emit oxygen, which feeds the animals
trapped in the ice.

Brand cuts off a sample and drops it into the case. The
transparent wall of the case magnifies the structure onto
the glass automatically. She compares it with the flecks
she collected in the ice above, fascinated.
82.

BRAND (CONT'D)
Look at this. I think they're the
same organism at a different stage
of the life cycle.
(shows him the sample)
It's fractal. No individual cells --
the structure repeats all the way
down.

Cooper looks at the sample, then continues scanning the jungle
around them, nervous.

COOPER
Any sign of big life-forms?

BRAND
The soil's been disturbed. So
something's been moving. But I
haven't seen anything.
(notices his look)
Cooper... are you nervous?

Cooper stops scanning the trees, embarrassed.

COOPER
I just think we should get back to
the shelter before night falls.

Overhead, the light from the ice above begins to fade -- the
neutron star must have orbited out of view. Night is falling.

BRAND
(LAUGHING)
Relax. If there are any large
organisms here, even predatory ones,
they're not going to attack us --
they have no idea what we are.

COOPER
You don't know that. You just have
blind faith this place is going to
be some kind of Eden.

Brand stops. He's struck a nerve.

BRAND
(truly pissed off)
Faith has nothing to do with it.
You know what you are, Cooper? You're
just another in a long line of people
saying 'no.' That this isn't going
to work. And frankly, I don't have
to convince you.
83.

COOPER
What's that supposed to mean?

BRAND
You're on this mission because you're
another pair of hands. You want the
truth? I told Case we should bring
another robot over you. At least
then I could just reprogram you to-

She stops. Something has caught her attention.

COOPER
What?

BRAND
Nothing. I just -- I could have
sworn it just moved.

She walks to the thick, knotted trunk of a tree. Puts a
hand on it.

Overhead, the ice flickers out and the darkness begins to
descend, more rapidly than on Earth.

Suddenly, the tree SHUDDERS. Then, the bark begins to ooze
over Brand's fingers.

Brand snaps her hand away and steps back. Even for her,
this is too much. She turns back to Cooper, who is looking
at the jungle around them, spooked.

COOPER
You know how plants don't usually
move? Is that a universal rule?

BRAND
No. There really aren't any rules.

All around them, the life-forms begins to melt toward the
ground, breaking down into different, smaller forms.

BRAND (CONT'D)
(trying to stay calm)
Remember, we're the aliens.

Cooper steps back as several pieces of the nearest tree drop
onto the ground and begin scuttling toward him.

BRAND (CONT'D)
Hold very still. Don't make any
sudden movements.

Two of the pieces join together, stacking themselves up and
staggering toward him.
84.

A third piece climbs onto the first two, looking for a good
place to hang on. After a moment it hunkers down on top,
forming a crude head. Thirty eye-like structures blink open
on the creature.

The skin of the life-form begins to flicker with a dim light
like the animals trapped in the ice above, bathing Cooper
and Brand in a warm glow.

The creature creeps closer to them, taking them in. Cooper
tries his best to seem non-threatening.

COOPER
Hello there.

The creature lurches toward him on three legs, then its head
splits open and it BELLOWS.

COOPER (CONT'D)
OK. Now we run.

Brand doesn't argue. They turn and sprint through the trees.

EXT. JUNGLE -- NIGHT

Cooper and Brand smash headlong through the jungle. At first,
they're running from the rumbling, smashing melee behind
them. But as they run, the entire jungle around them begins
to break apart and move.

After a moment, they're surrounded. The jungle is completely
disassembling itself into a million different pieces, each
one a different size and shape than the others.

COOPER
We have to reach the shelter.

They head off, crashing through the melee.

EXT. SHORE, ICE PLANET -- NIGHT

Case, Doyle and Roth are standing in front of the shelter
finishing the day's work.

Doyle turns around. The jungle is breaking apart and crawling
down the beach towards them.

DOYLE
I think we've got a problem.

Case and Roth look up to see the organisms picking up speed
as they move towards them.

Roth begins to step out towards them.
85.

ROTH
Fascinating. I think-

Case grabs him by the arm and pushes him bodily into the
shelter after Doyle.

Case pushes the door closed.

INT. SHELTER, ICE PLANET -- NIGHT

They crouch inside the shelter as the organisms begin POUNDING
at the walls, trying to force their way inside.

It's going to be a long night.

EXT. JUNGLE, ICE PLANET -- NIGHT

Ahead, Cooper can see the gleaming water of the inland sea,
light still flickering in patches from the ice above it.

COOPER
This way.

Brand begins to follow.

BRAND
No... wait.

Too late. Cooper forces his way between two writhing
creatures, steps through, and falls...

EXT. WATERFALL -- NIGHT

Cooper gasps as he surfaces from the ice-cold water. Brand
floats past.

The river appears to flow randomly down the slope, with good
reason -- the forest rearranges itself every night.

Ahead, the ground drops away again and the water rushes over
it in a torrent.

Cooper catches himself at the last minute, grabbing a thick
tree branch with one hand and, a second later, Brand with
the other as she slides past.

COOPER
I've got you.

Suddenly, the branch in Cooper's hand illuminates and wrenches
itself out of the rock -- it's a limb of a huge colony
organism. It shakes Cooper loose and they fall again...
86.

EXT. POOL -- NIGHT

Brand surfaces first. She grabs Cooper and hauls him up and
out of the water. She smiles down at him, a little smug.

BRAND
I've got you.

Creatures begin splashing down into the pool behind them, as
if imitating them.

Cooper stumbles to his feet and Brand guides them backward
into a small cave carved into the rock above the pool.

INT. CAVE -- NIGHT

Brand CRACKS a glow stick, basking the cave around them in a
soft light.

As they watch, horrified, the pool and the rocks in front of
the cave fill up with creatures of all sizes, as they tumble
down the hill in what appears to be a battle royal.

For a moment, it looks like Brand and Cooper may go unnoticed.
Then, a three-foot-tall creature with a dozen legs creeps
its way toward the entrance to the cave. Another follows,
and another, until the cave entrance is full.

Cooper looks around the cave, frantic. He picks up a rock.
Brand, scared but still thinking, takes the rock from his
hand and drops it back to the ground.

BRAND
It's game theory. The best move is
always to cooperate at first.

COOPER
By "cooperate" do you mean let it
eat me?

BRAND
These organisms have no interest in
us. They survive by photosynthesis.
All they need is light.

COOPER
Then why are they killing each other?

BRAND
I don't know.
(LOOKS AROUND)
But we're outnumbered, Cooper. So
unless you have a better idea, I
suggest we make nice.
87.

The creatures move toward them hesitantly, then faster.

Cooper stands stock still as the creatures gather around
him. Several of them join up into bigger animals to get a
better look at him.

One of them wraps itself around his chest and begins prodding
at his shoulders, then his neck.

COOPER
(trying to be calm)
What is it doing?

BRAND
It's a colony organism. It's trying
to incorporate you into its structure.

COOPER
I don't want it to incorporate me.

BRAND
Don't open your mouth.

COOPER
WHY N-

As he speaks, the creature on his chest extends four spindly,
pointed feelers and reaches gently into his mouth.

Cooper holds his breath as the organism taps against his
teeth. Its skin has a roughened texture, as if incomplete,
and it appears to be searching for the same texture on
Cooper's skin, without much luck.

Bored, the life-forms climb back down off of Cooper. The
last two creatures link up in an imitation of Cooper's lower
body and attempt to walk across the room like a human. After
a moment, the creatures tumble to the ground and flail away.

Cooper is still breathing hard as the cave empties and he
and Brand are left alone again.

Brand steps to the edge of the cave and watches, fascinated,
as the creatures resume wrestling and battling each other.

COOPER (CONT'D)
They're killing each other.

BRAND
No. They don't bleed... they don't
die... they're just competing...
trying out different shapes, looking
for the best one.
88.

Cooper watches as a hideously-awkward-looking, five-legged
beast stumbles past and tackles another animal.

COOPER
I'd say they have a long way to go.

BRAND
(AMAZED)
They do this every night.

As they watch, a two-foot-long creature with one huge claw
scuttles along the ground, grabbing smaller opponents and
smashing them apart, then sorting through the wreckage and
adopting some of the writhing parts as its own.

Something about the movement is endearing, the way it
experiments with each piece -- less like a massacre and more
like an over-caffeinated self-assembling erector set.

Suddenly, a massive, lumbering creature SMASHES down in front
of the claw beast. No match, the smaller creature turns to
scuttle away. Too slow. The larger organism brings one
club-like limb smashing down on top of it. After a moment,
it lifts its claw -- the two animals have become one.

The new organism lumbers away through the jungle, happily
snapping its new claw at larger opponents.

BRAND (CONT'D)
The behavior changes as the animals
get bigger and bigger. More
sophisticated. More calculated.

Two of the larger organisms square off, circling each other,
lights pulsing up and down their bodies in a fierce display.

COOPER
But what are they competing for?

BRAND
I don't know.

Brand shivers -- it's getting colder.

INT. CAVE -- NIGHT

Brand and Cooper huddle around a small chemical fire they've
brought with them.

Brand looks at the sample of the fractal wildlife in her
case. It's moving around, splitting apart, reforming, trying
to find a way out.
89.

BRAND
These creatures are billions of years
older than we are. But they're
relatively primitive. They haven't
developed tools, culture, language.

COOPER
Why not?

BRAND
I don't know. No one knows how
intelligent life began on Earth.
But the surface of this planet has
virtually no craters. No impacts.
It's been sheltered by the local
black holes.

COOPER
What difference would that make?

BRAND
Maybe not enough has gone wrong here.
Maybe bad luck is the key to
intelligent life.

COOPER
(QUIETLY)
Murph's Law.

BRAND
Exactly. Maybe our interaction with
them will push them over the top.
Maybe that's part of the plan.

COOPER
(shakes his head)
The plan.

BRAND
Why is it so hard for you to accept
that someone might be trying to help
us?

Cooper is silent for a moment. His mood darkens.

COOPER
I was in Denver during the first
year of the famine. I was just a
kid. We kept waiting for someone to
come help us. People starved to
death sitting on the ground, waiting
for someone to come.
(MORE)
90.

COOPER (CONT'D)
(looks at her)
I only made it because I realized
that nobody was coming to save us.
We were on our own.

Cooper looks away. The memories are never that far away.

COOPER (CONT'D)
Honestly? After the things I saw...
you want to know why I don't believe
that someone would be trying to help
us? Because I'm not sure we're worth
saving.

They sit in silence for a while.

EXT. CAVE -- NIGHT

Cooper sleeps. After a moment, Brand steps back out into
the darkness.

EXT. PLAIN -- DAWN

Brand exhales great streams of frosted breath -- the
temperature is well below freezing. The first flickers of
light are visible in the ice above.

The creatures are huge now, forty or fifty feet tall, battling
each other more and more slowly. As Brand watches, the
largest of them beats down his rivals, climbing to the top
of the heap.

Just as the beast reaches the top, it freezes, as if stuck.

Above, the ice begins to shine brighter and brighter.

Suddenly, the beast on top breaks apart, unfurling into planes
to catch the light. This is what the contest has been about --
a better place in the sun.

Brand takes it in.

EXT. JUNGLE -- DAY

Cooper and Brand pick their way their way through the foliage,
which is now perfectly still, absorbing the light. Cooper
looks at the plants, wary.

Brand sees his trepidation and laughs at him.

BRAND
They're not going to move now, Cooper.
They need to spread themselves as
thin as they can to absorb the light.
91.

Cooper leads the way, pushing through the trees.

Suddenly he stops again. Brand, annoyed, pushes through the
foliage to join him.

BRAND (CONT'D)
Cooper, honestly, you're a bit of a-

She stops. Cooper is standing at a sheer cliff.

Spread out on the plain below is a massive, fortified base.

INT. CHINESE FORTIFIED COLONY -- DAY

Massive blast doors, long since smashed in, open onto a
building that has been overrun by the local fractal wildlife.

Case steps inside first, his worklights flickering on. Cooper
and the others follow him in.

INT. MESS HALL, CHINESE COLONY -- DAY

The room is barely recognizable -- the fractal life has
covered the tables and chairs. Water pools on the floor and
light streams in from a massive hole the fractal animals
have punched in the ceiling.

DOYLE
Looks like the Chinese picked a fight
with the locals.

COOPER
Looks like they lost.

They continue through the ruins.

INT. BARRACKS, CHINESE COLONY -- DAY

The deeper they go, the less fractal wildlife they find.
The barracks are pristine -- hundreds of perfectly made beds,
waiting for colonists who never came, like one of the bunkers
the federal government used to keep in case of nuclear winter.

DOYLE
Look at the size of this place.
They built it for thousands of people.
But no one came.

Brand looks around, determined.

BRAND
They will. We can salvage it. This
place will save us years.
92.

COOPER
But why didn't they come?

BRAND
(SHRUGS)
The Chinese government collapsed,
same as ours. The people who knew
about this mission probably died
years ago. We had the same problems.

Roth finds a sign he likes the look of -- it points to the
science levels.

INT. LABORATORY, CHINESE COLONY -- DAY

A massive door GRINDS open and the team steps into a massive
complex of underground laboratories.

INT. DAMAGED LAB, CHINESE COLONY -- DAY

Cooper and the others carefully make their way through a lab
that has been completely emptied -- no desks, no chairs,
nothing. The only thing that remains is a solid ball of
matter in the center of the room.

BRAND
What happened here?

Roth stares at the ball, intrigued.

ROTH
They were testing something.

Cooper looks at the walls, which are bowed inwards.

COOPER
Testing what?

Roth is looking at the ball, which appears to have been built
from layers of different material. The outermost layer is
flattened steel.

COOPER (CONT'D)
(LOOKING CLOSER)
Is that a chair?

Roth looks. The outermost layer of the ball indeed looks
like a steel chair, flattened with incredible force onto
surface of the ball.

Brand opens the door to the next lab.
93.

INT. LABORATORY, CHINESE COLONY -- NIGHT

The lab is empty, except for a large metal sphere on a
pedestal in the center of the room. A black box is set into
a cavity in the sphere, wired to a control panel.

Cooper looks at the walls of the room, which have been bowed
inwards, as if some great force had been pulling from the
center of the room.

COOPER
Everything in here is bolted down.
(looks at sphere)
What do you think this thing does?

ROTH
(EXCITED)
Let's find out.

Roth finds a control panel. Wipes off an inch of dust and
begins tinkering with the controls.

COOPER
I wouldn't turn it on until we can
figure out what it does, Roth.

Roth continues to look over the controls, oblivious.

BRAND (O.S.)
Cooper. Come look at this.

Brand calls out from the hallway.

INT. STAIRWELL, CHINESE COLONY -- DAY

Cooper follows Brand's voice down the stairs to a sub-basement
beneath the lab level.

INT. OBSERVATORY, CHINESE COLONY -- DAY

Cooper steps into a huge space filled with a near perfect
holographic representation of the local system.

Cooper joins Brand and Doyle in the map, looking at the
incredibly detailed models of each star.

Case is standing at a terminal, hacking into the camp's
records.

CASE
I've found the Chinese mission logs.
They're encrypted.

Cooper walks over. Looks over the terminal.
94.

COOPER
Old military-grade encryption. It's
not very robust.
(looks at Case)
No offense. Hang on.

Cooper punches a few keys into the terminal. Opens up the
terminal. Scans the motherboard. Takes Case's rifle and
SMASHES one of the chips on the board.

The terminal comes to life. Cooper hands Case his rifle.

COOPER (CONT'D)
That should open up most of it.

Case is silent for a beat, parsing the information.

CASE
They got here twenty years ago. The
human crew was killed by radiation
the first day. But the robots
survived. They built the colony and
radioed home. But they didn't receive
a response.

COOPER
No one was listening.

CASE
(SCANS DOCUMENT)
After a few years they discovered a
problem.

DOYLE
What problem?

CASE
It doesn't say. Their science team
took the ship to continue exploring
the system. It says they found some
kind of...
(TRANSLATING)
...The word literally means
'treasure.'

Case skims through the rest of the logs, large portions of
which have been redacted.

CASE (CONT'D)
The science team returned after five
years with a new technology. They
began the experiments upstairs, then
they left again and never returned.
95.

BRAND
Where did they go?

CASE
I don't know. They've deleted their
mission plan. There's nothing else.

DOYLE
I think I know what the problem is.

Doyle is manipulating the time component of the map, slowing
down the passage of time, reversing it, speeding it up.

DOYLE (CONT'D)
Look.

Doyle speeds up the map until the ice planet is nearly a
blur, speeding in its orbit around Pantagruel.

DOYLE (CONT'D)
There's a small black hole moving
into the system. Too small for us
to have seen in our survey. It's
not going to hit the planet, but
it's going to come close.

A tiny black hole soars through the system. Although it
misses the ice planet, it deflects its orbit by a tiny degree.
After a dozen more orbits, the ice planet dips down close to
Pantagruel's event horizon and is torn apart.

Brand and the others watch as the sequence rewinds and repeats --
the planet is pieced back together again and ejected, then
pulled back in and torn apart. Over and over.

DOYLE (CONT'D)
This place isn't paradise. It's
doomed. Just like us.

The crew stand, watching the sequence in stunned silence.

COOPER
How long does this place have?

CASE
A few years. A decade at most.

Doyle turns to Brand.

DOYLE
So much for the plan.

Cooper looks at Brand. She is in disbelief, staring as a
lifetime's training and optimism are torn to pieces.
96.

BRAND
But I don't understand... why are we
here? What are we here for?

Cooper looks down. Brand's upset is turning to anger.

BRAND (CONT'D)
What the hell are we here for? I
trained my whole life to reach this
place.

She looks at Cooper, questioning.

COOPER
(GENTLE)
Maybe... maybe Roth's right... maybe
we just don't understand it yet.

She looks down. She knows he doesn't believe what he's
saying. He's been right all along -- they're alone.

For a tiny moment, all hope is lost.

Suddenly, with a distant RUMBLE, the building begins SHAKING.

COOPER (CONT'D)
Case, what is that?

CASE
It's nighttime. The native life-
forms are mobile again.

The RUMBLE grows more intense, as if the entire building is
being gently shaken.

COOPER
No. It's closer than that.
(REALIZING)
Roth.

The RUMBLE grows. As Cooper watches, Case's rifle slides
free of the desk. But instead of falling, it simply hangs
in the air.

Then he realizes the same thing is happening to them -- his
boots no longer have traction with the ground. After a second
everything in the room is floating an inch off of the ground.

COOPER (CONT'D)
Quick -- hold onto something.

He reaches out to Brand but it's too late -- suddenly they're
no longer floating, they're falling.

They're falling up.
97.

Cooper, Brand and the rest of them hit the ceiling. Cooper
picks himself up and adjusts to his surroundings -- up is
now down. He helps Brand up.

DOYLE
What the hell is happening?

Case doesn't answer -- he's looking up at the control
equipment for the holographic display, which is GROANING
under a load it was never built to handle.

Case grabs Cooper and Brand and pushes them towards the
stairwell as the control panel TEARS free of the floor and
CRASHES towards them.

Cooper falls into the stairwell -- now they're being pulled
up and sideways through the stairwell, like an Escher
painting.

Brand pushes Cooper out of the way as debris from the control
panel orbits past them back up towards the lab.

They try to hang on but the force is becoming irresistible,
dragging them along the wall of the stairwell and back towards
the lab upstairs.

Brand wedges herself against the railing as objects and debris
are SMASHING against the door to the lab.

Doyle is trying to hang onto the handrail but his grip slips
and he CRIES OUT as he falls towards the door to the lab,
SMASHING it open. Doyle disappears up and into the lab.

Cooper slips trying to help Doyle. Brand reaches out for
him...

Too late. Cooper is pulled through the open door.

INT. INTACT LAB, CHINESE COLONY -- NIGHT

Cooper is pulled through the door and past the control panel.
He reaches out and grabs the underside of the panel.

He dangles, the panel cutting into the meat of his hand,
trying to get his bearings:

Roth, Doyle, and everything that hasn't been bolted down is
either pressed against the sphere in the center of the room
or is orbiting around it.

Roth, who is laughing, jubilant, shouts up to him:

ROTH
The control panel is beneath you.
See if you can turn it off.
98.

Cooper slips as he tries to reach the controls. Finally he
finds the controls for the machine.

COOPER
(YELLS UP)
I found it. Hold onto something.

Roth and Doyle crawl up the side of the mass and hold onto
the support wires.

Cooper hits a key on the monitor.

Suddenly, the room inverts again, reverting to a normal
gravitational field. Cooper floats for a second, then topples
back to the ground, along with everything else.

Brand stumbles in to find Cooper sprawled on the floor as
Roth and Doyle hang onto the sphere for dear life.

INT. INTACT LAB, CHINESE COLONY -- NIGHT

Roth, back on terra firma, is looking at the tiny black box
he's pried from the center of the sphere. Cooper is looking
over his shoulder.

COOPER
They found a way to make gravity.

ROTH
Not make it. Adjust it. Dial it
up, or down. I think they were
experimenting with it -- firing these
into the black hole to try to save
this planet.

DOYLE
All that from one tiny box.

Roth has hooked the box up to a terminal and it scrolling
through the incredibly sophisticated machine code, trying to
parse how it works. Cooper looks on.

ROTH
(AMAZED)
It barely uses any power. I'm only
beginning to understand what it does
but I think it sends a signal out
into the bulk. It must tap into the
same technologies that were used to
create the wormholes in the first
place.

COOPER
What does that mean?
99.

ROTH
It means whoever built the wormhole
probably doesn't exist inside our
universe.

Cooper looks at the tiny box.

COOPER
But how did the Chinese develop the
technology? This would take decades,
maybe hundreds of years, to create.

CASE
Wherever they went, they found
something that allowed them to build
it.

Brand looks at the box.

ROTH
They came back here and tried to use
these devices to save this planet.
But they didn't work. Nothing would
be strong enough to weaken a black
hole.

BRAND
Maybe we could work with it. Try to
improve it.

ROTH
No. You're missing the bigger
picture. The robots had strict
mission parameters. They were told
to build a colony and report back.
They tried to. But they failed.
Like us they were fixated on this
place.

Cooper looks at Brand.

ROTH (CONT'D)
They didn't realize they had already
found something that would save us
all.
(holds up the box)
This. This is the prize.

He holds up the box.

ROTH (CONT'D)
Don't you see? Earth's gravity is
like a prison. But this is like a
master key.
(MORE)
100.

ROTH (CONT'D)
If we could build more of these, we
could turn down the earth's
gravitational field enough to save
millions of people. We wouldn't
have to pick a handful of people to
survive. With this we can save
everyone.

BRAND
And go where?

ROTH
Wherever we want. We don't belong
in any one place. Can't you see
that now? Not Earth. Not this place.
Nowhere. If the human race is going
to survive, we need to keep moving.
Split up. Spread out. Fly. With
this, we can.

Case looks at the box. Makes a decision.

CASE
In the morning we're taking this and
going home.

Doyle, Roth and Case set about making preparations to leave --
gathering space suits, equipment.

In the bustle, Cooper finds Brand sitting alone, staring at
the sample of fractal life.

COOPER
I know this isn't exactly what you
trained for. But I think Roth might
be right.

BRAND
That doesn't help this planet. This
creature is doomed. Unlike us it
doesn't have anywhere to go.

The fractal organism almost seems to be looking at her, trying
to comprehend. But it quickly loses interest and goes back
to breaking itself into pieces and reforming into different
shapes, trying to escape. Brand sets it back down.

CUT TO:

INT. BARRACKS, CHINESE COLONY -- DAY

Morning. Cooper and the others prepare to head out. They
are laden down with gear -- space suits for the return trip
to the lander once they reach the surface.
101.

Roth carries the gravitational prototype.

EXT. ENTRANCE, CHINESE FORTIFIED COLONY -- DAY

They make their way through the ruined entrance.

CASE
We need to hurry. We only have a
few hours to reach the ice before
nightfall.

Cooper stops. He puts a hand on Brand's shoulder. He points
to the tree line. Something is moving.

COOPER
Don't make any sudden movements.
They can't hurt us if we're unarmed.

BRAND
Who?

Suddenly, three ROBOT MARINES step out of the jungle, weapons
raised. They are wearing ghillie suits, pieced together
from dried dead pieces of the local foliage.

Under their camouflage, they looks identical to Case. With
one key difference -- faded red and gold insignias.

Case steps protectively in front of his team.

The CHINESE OFFICER steps forward, rifle levelled.

CHINESE OFFICER
Ni Hao. My name is Technical Sergeant
Liu, 177th reconnaissance Marines,
Army of the People's Republic.
Welcome to New China.
(POLITE)
Please put down your weapon.

Sergeant Liu speaks in the same even tones as Case -- they
were probably built in the same factory before the war.

Case keeps his rifle raised.

CASE
This is a scientific expedition, not
a military one. We are making our
way back to our ship.

LIU
I'm afraid I cannot let you do that.
We will provide food and shelter and
await further instructions.
(MORE)
102.

LIU (CONT'D)
We are sorry if this causes you any
inconvenience.

The sergeant is polite, but firm.

BRAND
This planet is being pulled into the
black hole. We all need to leave.

LIU
We will await further orders.

COOPER
Further orders aren't coming. Your
government is gone. It ran out of
money, same as ours. You're on your
own.

LIU
We can offer you food and shelter as
long as you require. The facilities
here are quite comfortable.

Liu's tone remains polite, but there's no hope of changing
his mind. Cooper takes a sidelong glance at Brand.

COOPER
(LOW)
They're never going to let us go.

BRAND
(TO LIU)
Your mission is a humanitarian one,
wasn't it? You were sent to start a
colony. Like us.

LIU
Our mission was to prepare for the
evacuation. This site was deemed
unacceptable.

BRAND
This device that you have built --
this could save millions of people.
We need to get it back home.

Brand points to the device Roth is holding. The Chinese
robots seem particularly unhappy with this development.

LIU
These technologies are the property
of the People's Republic.
(MORE)
103.

LIU (CONT'D)
We have been ordered to prevent anyone
from taking them. We have been
ordered to prevent anyone from
following.

ROTH
Following? Following where?

Liu pauses.

LIU
We will await further orders.

ROTH
Your name means six. Where did the
others go? One through five? Is
that who were not supposed to follow.

Case turns to look at Cooper.

CASE
(LOW)
Take the others up to the lander.
Keep going. No matter what happens,
don't come back for me.

Cooper nods.

Case moves. Fast. He FIRES one shot at the nearest robot,
disabling it, then hurls himself at the remaining two,
tackling them both over the edge of the ravine.

Cooper watches them disappear into the void below. Grabs
Brand and the others.

COOPER
Come on.

Cooper picks up the rifle from the destroyed marine and begins
hiking up the mountain.

EXT. MOUNTAIN PEAK -- DAY

The crew hike towards the ice above.

Below they hear a metallic BOOM as something heavy hits
something else -- Case is still fighting. They keep moving.

EXT. UPPER MOUNTAIN PEAK -- TWILIGHT

They are high above the Marine camp, only fifty feet or so
below the massive ice roof of the cavern. The Chinese have
blasted a tunnel into the ice leading back up to the camp
above.
104.

This high, the air is bitterly cold. Cooper and the others
are hunkered down, trying to keep warm, waiting for night to
fall so that they can climb back up to the lander without
being cooked by the neutron star.

Finally, above them, the light begins to flicker out. The
crew begin pulling on their space suits.

Brand checks on the fractal wildlife in the sample case --
she is bringing it with them. Cooper catches her eye.

BRAND
We can't leave them all to die.

She hefts the case and they begin climbing up into the ice.

EXT. SURFACE, ICE PLANET -- NIGHT

Brand leads the way, the lights from her suit cutting into
the drifts of snow as they make their way slowly back to the
lander.

As they reach the lander Cooper spots lights emerging from
the ship. He raises Case's weapon.

One of Liu's marines steps around from the back of the lander.
Cooper FIRES.

The marine collapses.

Cooper and the others race to the lander.

BRAND
Was that the last of them?

DOYLE
We're not going to stick around to
count them. Let's get out of here.

COOPER
We're too late.

Cooper points to a damaged section of the ship's hull -- the
marine has torn open a section, revealing damaged hardware.

COOPER (CONT'D)
The main thruster fuel supply. We're
not going anywhere.

Cooper looks down. They're stuck here.

DOYLE
What about the escape rocket at the
Chinese base camp? One of us could
fit into it.
105.

BRAND
It doesn't matter how many of us
make it. We have to get this back
to earth.

Roth looks at the moons orbiting overhead.

ROTH
Can the secondary thrusters still
fire on the lander?

Doyle looks over the craft.

DOYLE
Sure. But we don't have nearly enough
power for lift off.

Roth holds up the small gravity black box.

ROTH
(SMILES)
Yes we do.

Roth sets off running towards the Chinese base camp.

EXT. CHINESE BASE CAMP, ICE PLANET -- NIGHT

Cooper drags the pieces of the escape rocket out from the
shelter. Assembly is semiautomatic -- Cooper lifts the pieces
up and they snap together, forming a crude two-stage rocket
designed more for a robot than a man.

When it's complete Roth wedges himself inside, clutching the
black box -- he barely fits.

ROTH
I can reach one of the moons in low
orbit and turn up its gravity. As
it passes overhead it should be able
to slingshot the lander away from
the planet's surface.
(LOOKS AROUND)
Along with everything else.

COOPER
But we need to take the box back to
earth.

ROTH
You don't need this -- only the idea.
The knowledge of how to build it.

Cooper remembers something. Heads back into the shelter.
106.

INT. CHINESE BASE CAMP, ICE PLANET -- NIGHT

Roth follows Cooper into the lab.

Cooper opens the storage crate. Picks one of the probes at
random. Sets it down on the bench next to Roth.

Cooper begins rigging up a connection between the two.

COOPER
I'm going to image the operating
code and the architecture onto the
probe's hard drive. It'll be garbled,
but it should give you and me enough
to rebuild it when we get back.

Cooper looks at the probe filling up with data.

ROTH
Not me. But you'll make it work.

The transfer is complete. Roth hands Cooper the probe, and
takes the black box himself.

ROTH (CONT'D)
This is a one-way trip for me.

Before Cooper can respond, Roth heads for the door.

EXT. CHINESE BASE CAMP, ICE PLANET -- NIGHT

Roth squeezes himself into the rocket, hugging the black box
to his chest. Cooper and Brand help him.

BRAND
This isn't right, Roth. We can find
a way for all of us to leave.

ROTH
This is the only way. Keep the lander
upright and fire the secondary
boosters when the moon passes
overhead.

COOPER
Let me take it.

ROTH
No. You need to make it home. You're
going to need to build more of these.

Brand looks at him, heartbroken. Roth smiles.
107.

ROTH (CONT'D)
I understand the plan, now. Whatever
happens, you have to keep exploring.
Keep learning. One good idea isn't
enough. You'll need more and more
of them just to survive. Do you
understand?

BRAND
(NODS)
Thank you.

ROTH
Go.

Brand turns to follow Cooper back.

Behind her, Roth's rocket LAUNCHES on an explosive cloud.
In seconds it's high overhead.

EXT. LANDER -- NIGHT

Cooper checks over the hull, which is intact. Doyle is inside
looking over the controls. He steps back outside.

DOYLE
Control systems inside are online.
(LOOKS UP)
I've lost sight of the rocket. Do
you think he made it?

COOPER
We're going to find out soon enough.

Brand is looking off into the distance.

BRAND
Someone's coming.

Cooper looks up. A robotlike figure is limping through the
snowstorm towards them. Cooper raises the rifle.

Finally he makes out the insignia -- it's Case.

Cooper and Doyle run out towards him. They reach Case as he
collapses in the snow. He's badly injured -- one leg torn
off at the knee, one arm mangled.

Doyle and Cooper drag the crippled robot back into the ship.

INT. LANDER -- NIGHT

They drag Case into the lander. Doyle checks over the ship's
controls.
108.

DOYLE
Close the door.

Cooper moves to the door. Something's wrong.

COOPER
Where's Brand?

She's nowhere to be seen. Cooper looks out onto the ice.
Brand is heading back out into the snow.

COOPER (CONT'D)
Dammit. If I don't make it back,
just keep going.
(points to probe)
Get that thing home.

Cooper steps to the door.

EXT. SPACE ABOVE ICE PLANET

The rocket tucks in close behind one of the moons orbiting
the ice planet.

The rocket fires to maneuver closer and closer to the moon's
surface -- the tiny moon doesn't provide enough gravity to
attract it.

When the rocket is close enough, Roth detonates the explosive
bolts holding him inside and leaps for the moon's surface.

He scrambles to grab hold of the craggy surface. Behind
him, the rocket smashes apart against the surface.

Roth finally gets a good hold. He looks down.

Below him, the view is incredible -- the ice planet curving
into the distance, Gargantua rising over its horizon.

Roth looks at the black box in his hands.

EXT. SURFACE, ICE PLANET -- NIGHT

Brand is a hundred yards from the lander by the time Cooper
catches up with her. She is digging in the snow.

He takes her arm but she won't go.

She finally finds what she's looking for -- the sample case.
The tiny fractal life-form is huddled at the bottom.

Cooper shakes his head and turns back to the lander.
109.

EXT. MOON, SPACE OVER ICE PLANET

Roth is watching the ice planet pass by beneath him. He
finally sees the distant peaks of the mountain range as it
punctures the ice near the Chinese camp.

For a moment he enjoys the view -- the distant hulk of
Gargantua rising over the horizon of the shining ice planet.

He takes a final breath and activates the black box.

Instantly, the moon's gravity is magnified a hundred million
times over. Roth is instantly crushed as the moon collapses
around him into a tiny sphere.

EXT. SURFACE, ICE PLANET -- NIGHT

Cooper and Brand are only thirty yards or so from the lander.

Suddenly, the ground beneath them begins to RUMBLE.

Cooper turns back. A mile back the ground begins to tear
apart, heaving massive chunks of ice and rock into the sky.

Roth's moon is racing overhead, TEARING up a massive strip
of the surface's planet as it nears them.

Cooper and Brand run.

EXT. MOON, SPACE OVER ICE PLANET

The energy being unleashed by the tiny box is incredible --
millions of times more powerful than an atomic bomb.

The spray of debris is forming a rooster tail behind the
moon, rocketing up from the planet's surface.

EXT. LANDER, SURFACE, ICE PLANET -- NIGHT

Cooper has almost made it back to the lander. Behind him,
Brand stumbles. He turns back.

Brand is pulling herself up. Behind her, the THUNDEROUS
EXPLOSIONS as a strip of the planet's surface is hurled into
space have almost reached them.

Cooper looks at the ship. He'll never make it if he waits
for Brand. He turns back to find her.

He reaches Brand just as the moon's gravity hits them --
they're hurtled off into space. He grabs her hand.

Seconds later, everything -- the entire ice sheet, the sea
and rocks deep below -- is hurled up after them.
110.

Brand and Cooper embrace as they rocket up through the thin
atmosphere.

Brand looks at him.

BRAND
(RADIO)
You caught me. Now what?

Cooper looks around. They planet's surface is breaking into
pieces around them.

COOPER
(RADIO)
I don't know.
(RADIO)
I figured if you were floating out
into space, you'd want some company.

He holds onto her as they fall up and out of the last of the
planet's thin atmosphere and the blackness embraces them.

BRAND
Between you and utter solitude,
Cooper, frankly, I'm not sure.

They reach the apex of their climb and the gravity of the
planet begins to win out. For a moment they float.

COOPER
Guess you were right -- too much
gravity, or not enough.

He smiles, forgetting their predicament for a moment. They
stare into each other's eyes.

Then they begin, very gently, to fall back towards the ice
planet.

Suddenly, the lander maneuvers beneath them. The airlock
opens to catch them -- Doyle is at the helm.

Brand and Cooper pull themselves aboard.

INT. LANDER

Cooper closes the door and Doyle rotates the lander outwards.

Doyle FIRES the engines and the lander continues ascending
into space as the debris around them begins crashing back
down towards the ice planet.

Cooper looks out the window:
111.

The moon continues tearing up a massive canyon in the planet's
surface as it circles out of view.

COOPER
Roth.

BRAND
He's gone.

Ahead, a shadow looms in the darkness: the Endurance.

INT. OBSERVATION DECK, ENDURANCE

Brand, Cooper, and Doyle pull themselves out of the airlock
and scramble to take control of the ship.

Below them, the surface of the ice planet illuminates as the
neutron star's x-rays begin to reach it from the far side of
Pantagruel.

Doyle finally gets the ship straightened out. Its sole
remaining engine FIRES, rocketing the ship back towards the
dark side of the planet, out of view of the neutron star,
and back towards the original wormhole.

DOYLE
I'm setting a course for the wormhole.

They're going to make it.

Cooper and Brand make eye contact -- Brand gives him a tiny
awkward smile. He returns it, then descends below.

INT. OUTER HULL, ENDURANCE

Cooper props Case up against the workbench. He pulls down
replacement arms and legs from storage bins. Unwraps them
from their vacuum sealed plastic and bolts them back onto
Case's chassis.

Cooper finishes attaching the arm. Case rotates it, checking
the function.

COOPER
How is that working?

CASE
Very well, thank you.

COOPER
Good. We've already set the course,
skipper. We're going home.

Cooper hauls himself back up into the observation level.
112.

INT. OBSERVATION LEVEL

Doyle is setting the controls. The ALARMS on the controls
have finally abated -- they're out of the danger zone.

BRAND
We're safe now.

Cooper heads to the communications equipment.

COOPER
Now I know why we weren't able to
hit the relay. It's not interference --
the blue-shift from the black hole
is more than we thought it would be.

Cooper begins re-calibrating the equipment.

BRAND
(CONFLICTED)
Cooper, wait--

The ship PINGS the relay on the far side of the wormhole.

There is no response.

COOPER
Nothing.
(THINKS)
Wait. The ship cached one long
garbled transmission when we first
fell into the swirl. If we account
for the blue shift then the computer
might find something in there.

Cooper brings up the last garbled transmission they received.
The computer begins re-analyzing it, piece by piece.

BRAND
(QUIET)
Listen to me -- the blueshift also
means we've lost time. More time
than we thought we would.

Cooper looks up at her.

COOPER
How much?

BRAND
A lot... Cooper, maybe it's best if
WE DON'T-

The comms equipment TONES as it translates a packet. Then
another.
113.

Then a FLOOD of communications, one packet a day, hundreds
and hundreds of packets: images, videos, audio messages from
family and friends.

Cooper watches, horrified, as the images play out across the
screen. He is watching the lives of his family play out at
light speed. Finally, the packets slow, then stop.

Cooper looks at the results, in shock.

COOPER
Forty seven years.

Doyle joins him, staring at the screen, stunned.

DOYLE
My kids...

Cooper tries to PING the relay again. Nothing comes back.

BRAND
(GENTLE)
The relay will have lost power years
ago. That's why we couldn't contact
it, even after we reached the planet.

Cooper is still problem solving, thinking.

COOPER
We could bypass the relay. Send a
conventional shortwave signal.

BRAND
Only a tiny portion of the signal
would make it though the wormhole.
Besides, no one will be listening
anymore.

The comms screen is dead. No movement. Nothing.

Cooper looks at Brand, realizing something.

COOPER
You knew, didn't you? You and Case
figured it out when we landed.

Brand looks down.

BRAND
I thought... I couldn't be sure.

COOPER
Sure you could. You're brilliant.
You know everything.
114.

BRAND
Cooper... we needed to keep going.
I'm so sorry. Your children...

COOPER
They're not children any more... if
they're even still alive.

He turns away from her.

BRAND
Listen, the important thing is that
we're going home, now. And we have
something that can save everyone.
It's more important than the people
we left behind-

Doyle cuts her off, filled with anger.

DOYLE
That's easy for you to say. You
didn't leave anyone behind.

Cooper looks at Brand, his anger softened by sadness.

COOPER
Yes she did.

Brand looks at him, grateful for this small kindness.

COOPER (CONT'D)
That's why you were upset -- your
father.

She looks down, filled with sadness.

BRAND
He's gone. But there are other people
who still need our help. There's
still time...

The ship's controls TONE in ALARM. Brand and Cooper turn:

Case is standing at the controls.

BRAND (CONT'D)
Case... what are you doing?

Case finishes typing in a sequence on the command controls.
Presses the "execute" button.

The last nuclear engine begins to detach from the ship.

BRAND (CONT'D)
Wait... no...
115.

The robot turns from them. Cooper notices that the control
module snapped into the back of Case's chassis is wrong:

It's red with a gold star. It's not Case at all. It's Liu.

LIU
I'm sorry. I have my orders. No
one follows...

Liu stares, satisfied, as the nuclear engine spins away from
the ship and back down toward Pantagruel.

Cooper SMASHES Liu from behind. The robot tumbles to the
ground, the fight gone out of him.

Cooper and Doyle roll the robot over and Cooper reaches for
his control module.

LIU (CONT'D)
No one follows-

Cooper rips the module out. The robot freezes.

Brand is already at the controls, trying to regain control.

The instruments TONE, alerting the crew to their position:

The ship is spinning back down towards the black hole.

BRAND
No... We're being pulled back to
Pantagruel.

Cooper, frantically checks the controls, firing the remaining
boosters.

COOPER
We can't let that happen. We'll
lose more time... too much...

The boosters are no match for the deadly pull of the black
hole below them.

On the ship's guidance, they watch, helpless, as the ship
climbs back up the volcano rim towards the critical orbit.

As on their first trip, the black hole grows to dominate the
bottom of the sky, and the stars above them become streaks --
time is speeding for them as they are whirled down into the
deep gravity well around the hole.

As they watch, trapped, decades begin to play out in the
system above them. They watch as the ice planet whirls around
them, orbiting the black hole dozens of times.
116.

COOPER (CONT'D)
We're losing years.

Finally, the ice planet plunges past them towards destruction.
As it reaches it slows, until finally it reaches the event
horizon, just as they saw in the projections. Nothing has
prepared them for the reality:

The ice planet is SMASHED apart with stunning violence.

Brand looks at the sample of fractal life. Now they are
united -- they are, in all likelihood, the sole survivors of
their planet.

Doyle points to the instruments.

DOYLE
The wormhole. Look -- it's being
pulled into the black hole as well.

They watch on the holographic model as the wormhole's orbit
converges on the event horizon of the black hole.

BRAND
It's orbit mirrored the ice planet's.

COOPER
What will happen to it?

BRAND
It'll be destroyed, like everything
else.

Cooper struggles to pull himself over to the communications
screen. Sets it to make a shortwave broadcast. Brand opens
her mouth to point out that it's futile, then stops.

COOPER
(INTO RADIO)
This is the crew of the Endurance.
We...
(gives up on
FORMALITIES)
Murph, I'm sorry. I'm sorry I didn't
make it back, like I promised.

He hangs up the radio.

In silence, they watch as the wormhole -- their only way
home -- vanishes beneath the event horizon.

DOYLE
How much time are we losing?
117.

BRAND
(HEARTBROKEN)
Decades...hundreds of years.

COOPER
All of those people back home...
none of them will make it.

As Doyle watches the controls the ship continues to spiral
towards the black hole.

DOYLE
This is it. We're going to be pulled
in.

Cooper looks at the controls, an idea forming.

He pulls himself down. Hauls himself across the deck to
pick up Liu's chip. He plugs it into a diagnostic tool.

BRAND
What are you doing?

COOPER
Case said the Chinese found something
else. The location was scrubbed
from their records. But I bet he
knows it.

Cooper fires up the chip. Begins sorting through the onboard
memory.

Doyle watches the instruments.

DOYLE
Hurry up.

Cooper concentrates, poring over the numbers. Finally he
begins feeding coordinates into the navigation computer.

COOPER
Here. Can we reach it?

Brand looks at the map. The point appears on the far side
of Gargantua. Brand studies the trajectory.

BRAND
We can use the thrusters to keep us
on the critical orbit. Then slingshot
us towards Gargantua.

The thrusters STRAIN to push the ship back up towards the
critical orbit.
118.

Suddenly, the tidal gravity SLAMS them against the walls of
the ship.

Finally, the thrusters fire again -- a tiny push, but just
enough to launch the ship clear of the black hole, like a
rock out of a slingshot.

The ship races toward the massive hole in the sky below them:

GARGANTUA

EXT. SPACE AROUND GARGANTUA

The ship picks up more and more speed as it soars closer to
the massive black hole's event horizon.

INT. OBSERVATION DECK, ENDURANCE

The sky closes to a tiny hole above them. Gargantua is
swallowing their view.

Cooper looks at the radar, which is choked with debris.

DOYLE
We only have a few minutes before
we're swallowed into that thing.
What are we even looking for?

On the radar, a tiny empty spot appears.

COOPER
(points to screen)
That? What is it?

Brand looks. In one tiny region on the back side of the
black hole, the debris simply seems to vanish.

BRAND
It's another wormhole.

Doyle FIRES the thrusters again, pushing the ship towards
the wormhole.

EXT. SPACE AROUND GARGANTUA

The Endurance spins, shifting paths slightly as it continues
to race closer and closer to oblivion.

INT. OBSERVATION DECK, ENDURANCE

They study the controls. The projected path shifts, one
degree at a time. Finally, it appears to put them on a path
to hit the wormhole.

Doyle shuts off the thrusters.
119.

DOYLE
We're not going to be able to slow
down. Hold onto something.

He locks up the controls.

EXT. SPACE AROUND GARGANTUA -- MORNING

The ship is tumbling through space, racing toward the second
wormhole. It is massive, much larger than the first wormhole,
and it's glowing with a light as bright as a star.

INT. OBSERVATION DECK, ENDURANCE

The crew brace themselves against the hull of the ship.

Suddenly the ship slams onto the wormhole mouth and is pulled
violently into the wormhole.

WHITENESS.

As the light fades, Cooper and the others come to.

The light is rapidly dimming from pure white, fading to a
deep red, then infrared, finally darkness.

Cooper looks out. Checks the instruments. Looks out again.

EXT. VACUUM

Nothing. Blackness as far as the eye can see. No stars.
No planets. Just inky darkness stretching on forever.

INT. OBSERVATION DECK, ENDURANCE

Brand joins Cooper on the deck. Together, they look out at
the blackness that surrounds them.

COOPER
Where are we?

BRAND
I don't know. It's like we entered
the wormhole and never left it.

Brand checks the instruments. There is nothing for the ship
to model.

There is nowhere to go. They drift.

INT. OBSERVATION DECK, ENDURANCE

Days go by. They check the instruments. Still nothing.
It's as if they have left the known universe altogether.
120.

INT. COMMUNICATIONS ROOM, ENDURANCE

Doyle sits down. After a moment, he turns on the screen and
cues up a message.

His children appear on-screen, giggling, pushing each other,
trying to get a prime spot in front of the camera.

Doyle cups his face in his hands and cries.

INT. CREW QUARTERS, ENDURANCE

Cooper above his bunk, stares out into the blackness.

Brand watches him from the doorway.

BRAND
I'm sorry. I should have told you.
I didn't have the right.
(BEAT)
But you should watch the recordings.
You should know what happened to
your kids.

Cooper ignores her.

INT. COMMUNICATIONS ROOM, ENDURANCE

Brand watches her father talking to her on-screen. He is
twenty years older than when she left him.

BRAND'S FATHER
I'm not going to make it much longer.
The machines will continue to maintain
the station as long as they can and
the communications will run as long
as the station here still has power.
I'm sorry. I hope wherever you are,
darling, you're safe.

The screen cuts out. Brand watches the static play out.

INT. OBSERVATION DECK, ENDURANCE

Doyle sits at the table. He has found a flair gun in one of
the ditch kits. It is sitting on the table in front of him.
The message is clear.

Brand sits down across from him.

BRAND
Our last trip past the black hole
cost us another 100, maybe 200 years.
Which means there's a good chance
we're the only humans alive anywhere.
121.

She stands up.

BRAND (CONT'D)
I think the last human beings should
have a little more fight in them
than that.

Brand picks up the sample of fractal life and places it under
a lamp on the counter. It freezes, absorbing the rays.

Doyle looks at the gun.

EXT. ENDURANCE, VACUUM

Cooper, in a space suit, steps out of the airlock.

He drifts out from the ship.

Nothing. Behind him, the ship is a tiny speck in an ocean
of darkness.

INT. COMMUNICATIONS ROOM, ENDURANCE

Cooper sits down. Turns on the screen.

After a moment, the camera turns on. Tom, his eldest son,
still 15 years old, turns on the camera.

TOM
Hi, Dad.

Cooper pauses it. He can't take it. After a moment, he
lets it run again.

TOM (CONT'D)
I met another girl, Dad. I really
think this is the one.

Tom holds up a picture of himself and a teenage GIRL.

TOM (CONT'D)
Murph stole Grandpa's car. He crashed
it. He's OK, though. No broken
bones.

Cooper leans back.

INT. COMMUNICATIONS ROOM, ENDURANCE

Cooper is holed up, still watching, several days' growth of
beard unshaved. He's been watching for days.

On the screen, Tom is a grown man in his 20s.
122.

TOM
I've got a surprise for you, Dad.
You're a grandpa.

Tom holds up an infant wrapped tight in swaddling. The kid
is BAWLING.

TOM (CONT'D)
Congratulations. Grandpa said he
already earned the "great" bit so we
just leave it at that.

The screen cuts out.

The next message begins. Tom is in his 30s.

TOM (CONT'D)
Hi, Dad. I'm sorry it's been awhile.

He stops, emotional.

TOM (CONT'D)
Grandpa died last week. We buried
him out in the back forty, next to
Mom.
(LOOKS DOWN)
Where we'd have buried you, if you'd
ever come back.

He laughs, gallows humor.

TOM (CONT'D)
Murph was there for the funeral.
It's been a few years since I've
seen him. He's been down in the
Gulf Coast. He's an engineer. I
guess someone followed in your
footsteps after all.

Tom looks down.

TOM (CONT'D)
You're not listening to this. I
know that. All of these messages
are just out there, drifting in the
darkness.

He stops for a second.

TOM (CONT'D)
You're gone. You're never coming
back. And I've known that for a
long time. Lois says -- that's my
wife, Dad -- she says I have to let
you go. So I am.
123.

He reaches up to turn off the camera.

TOM (CONT'D)
Wherever you are, I hope you're at
peace. Goodbye, Dad.

The image freezes, Tom's hand on the camera, then breaks
apart into digital noise.

Then nothing.

Cooper looks at it for a second. Then rises to leave.

Suddenly, the screen flickers to life again.

A good-looking man in his late 30s turns on a camera. Cooper
recognizes him instantly. It's Murph.

Murph looks at the camera for a long beat, clearly unsure
about this.

MURPH
Hello, Dad. You sonofabitch.

He laughs, self-conscious.

MURPH (CONT'D)
It's your 60th birthday today.
Thought I would celebrate with you a
bit.
(BEAT)
I guess I understand why you left.
The corn is dying now, too.
Tom says there's less and less at
harvest every year.

He pauses. Lifts up his hand and scratches his stubble.

Cooper pauses the message. He looks carefully at the screen:

Murph is wearing his dad's watch.

Cooper lets the message play. Tears are streaming down his
face.

MURPH (CONT'D)
Rot's setting in. I guess you were
right for clearing out while you had
the chance.
(reaches up to switch
OFF CAMERA)
Good luck, old man. I hope you made
it. I really do.

The video cuts out.
124.

A message appears on the screen:

"Final transmission." Relay powered down 05232087

Cooper turns off the screen.

INT. CREW QUARTERS, ENDURANCE

Cooper is seated, alone. Almost every compartment has been
opened and emptied -- debris is swirling through the
compartment.

Brand walks in. They sit in silence for a moment. When
Cooper speaks, it's clear his sadness has faded to a gallows
humor.

COOPER
Not a single drink on the whole ship.
What kind of mission is this?

BRAND
I think Doyle's been experimenting
with the coolant from his spacesuit.

They sit in silence for a moment.

COOPER
You really think we're the last humans
alive anywhere?

BRAND
I don't know. Maybe.
(looks him in the eye)
Yes.

COOPER
So that's it, then? That's all?

He looks down, saddened by his own words.

BRAND
(QUIET)
It's happened a billion times over.
Stars explode. The pieces drift in
space. Gravity pulls them back
together. They form new stars.
Then planets. Then us. We die. It
starts all over again.

Cooper shakes his head.

COOPER
What about the plan? The grand
scheme.
125.

BRAND
I thought you didn't believe in one.

COOPER
I didn't. But you were bringing me
round.

He laughs, his anger coming and going in waves.

COOPER (CONT'D)
What the hell was the point? What
did it add up to?

BRAND
I don't know. Maybe it just adds up
to this.

COOPER
This? You're saying the end result
of ten billion years is the atoms
from dead stars standing here
disagreeing with each other.

She smiles at him. Bittersweet.

BRAND
Maybe that's enough.

He turns away from her. She takes his shoulder.

She pulls him into a kiss. His surprise disappears and he
pulls her to him, kissing her back.

Their surroundings forgotten, they drift. She LAUGHS gently
as they bump into a wall and he pushes off of it, sending
them spinning back into the center of the cabin.

She pulls his shirt off and it hangs in space. In moments,
the cabin is filling with discarded clothes, different colors
and shapes, like a ticker tape parade.

In the center of the cabin, Brand and Cooper make love.

INT. CREW QUARTERS, ENDURANCE -- LATER

Cooper and Brand embrace, sleeping, drifting in the cabin.

Suddenly, Doyle's voice calls out from the other cabin.

DOYLE (O.S.)
It's happening... it's happening
again... Get up here...

Cooper wakes, careful not to disturb Brand. He plucks his
shirt from the floating laundry pile and pulls it on.
126.

INT. OBSERVATION DECK, ENDURANCE

Cooper hauls himself up into the upper cabin. Doyle is
standing in the middle of the chamber.

DOYLE
They just appeared.

A sphere of distortion, like the one they encountered in the
first wormhole, is directly in front of Doyle, hovering at a
point in the middle of the cabin.

Doyle points a finger gently at the sphere, which grows in
response.

Brand pulls herself into the cabin. Several more points
appear, as if they've been summoned by the first.

Some of the points twist, some of them spin, and some of
them are motionless.

BRAND
I think these are the creatures that
built the wormhole.

One of them begins to move closer to Cooper.

COOPER
This thing is made of... gravity?

BRAND
No. I don't think it's in our
universe at all. I think it lives
in the bulk -- the space that the
wormholes traverse. And it can only
interact with us using gravity.

The shape playfully grows around Cooper's hand, bending the
space it's in, stretching the skin.

Doyle GASPS as the sphere nearest him moves through his body,
coming to rest in the middle and bending his entire torso
like a fun house mirror.

Suddenly, the sphere wrapped around Cooper's hand begins
moving, tugging him gently through the cabin.

In the next moment, all three of them are being propelled
through the cabin.

It's a magical moment -- a communion, a dance between
creatures on either side of a massive, invisible wall.

Doyle exclaims like a kid on a roller coaster as he is whirled
around the room.
127.

Cooper and Brand collide with each other for a second as the
bulk beings move them through space. They hold onto each
other for a moment and then are pulled apart again as the
whirling dance continues.

Even the fractal creature is involved -- inside its cage, a
tiny distortion ripples its fractal skin. The creature breaks
apart and plays with the distortion around its enclosure.

Finally, Brand disengages from the dance and pulls herself
around the lab, looking for some way to try to communicate
with the creatures.

She finds two heavy pieces of engineering equipment and moves
them close to each other, then far apart.

The bulk beings soon join her, mimicking the motion of the
pieces of equipment.

COOPER
Can we communicate with them?

BRAND
Where would we even start? Maybe--

She pull a bag of ball bearings out of a storage bin and
tears the bag open, releasing a cloud of the tiny shining
globes into the air.

For a moment, nothing happens. Then, the distortions begin
moving through the bearings, shifting them, rearranging them
into patterns in the air.

First, they rearrange the ball bearings into clusters, then
shapes spinning around each other -- planets orbiting around
a medium-sized star.

DOYLE
That's our solar system.

After a moment the ball bearings break apart again and
rearrange into a larger, more complicated system -- Gargantua,
Pantagruel, and the ice planet.

Finally, the bearings compress to a two-dimensional sheet.
Inside the sheet, one solitary ball bearing orbits around
the stars and then pushes up, off of the sheet, into an
umbrella shaped space that rises up from the sheet.

COOPER
What is that?

Brand looks at the tiny particle, floating alone above its
universe.
128.

BRAND
That's us. That's where they've
brought us. We're in the bulk.

Cooper and Doyle stare at the particle. The map is static
now.

Cooper looks around. The distortions have gone. The
instruments on the ship TONE in alarm.

Cooper walks through the map, sending the ball bearings
scattering. He hurries to the instruments. The ship is
moving -- picking up speed at a huge rate.

BRAND (CONT'D)
They're moving us.

DOYLE
Where?

They stand, looking out into the perfect darkness.

EXT. ENDURANCE, VACUUM

The ship begins to close in on something in the darkness: a
tiny point of light.

As they grow closer, they realize that it's an opening.
They are inside a massive, hollow sphere. They have been
the entire time.

The ship is guided out through the opening at the crown of
the sphere.

Below them is an astonishing sight:

Our entire universe, compressed into a flattened disc, like
a floor of stars. They are hovering above it, in the bulk,
the space between universes.

INT. ENDURANCE, BULK

Brand and the others stare at the incredible display.

The ship drops down and begins to orbit around the massive
hollow sphere between them and our universe, lower and lower
until it is skimming just above the surface of the sphere.

In the distance, they can make out a cluster of lights.

COOPER
There's something out there.

The cluster of lights grows as they are propelled closer:
129.

It's a massive space station, built onto the surface of the
sphere.

EXT. SPACE STATION

The Endurance glides to a gentle stop on one of the upper
decks of the space station.

After a moment, the airlock to the ship opens and Cooper and
the others step out, in their suits.

They walk up to the airlock doors of the station, which open
automatically.

INT. SPACE STATION

After the airlock decompresses, the inner doors open.
Standing there, waiting for them, is a familiar figure:

Tars.

TARS
(DEADPAN)
I guess this isn't robot heaven after
all.

The light on his brow glows and he offers them both a hand.

INT. GRAND LABORATORY, SPACE STATION

The humans have taken off their space suits -- the station
has been built to be habitable by humans -- and are following
Tars through the massive facility.

TARS
I orbited the black hole seven times
before I hit the second wormhole.
Then I drifted until I found this
place.

Cooper looks around. The halls are filled with countless
technological wonders.

COOPER
This is what the Chinese were
protecting.
(LOOKS AROUND)
How they could have built all this
in just a handful of years.

TARS
They didn't. It took them four
thousand.
(off Brand's look)
Time moves very slowly here
130.

BRAND
How do you know?

TARS
Because I've been waiting for you
for three hundred years.

Brand looks around at the massive facility.

BRAND
Time. That's what the bulk beings
wanted to give us. That was the
treasure the Chinese found. Enough
time to let us save ourselves.

Brand looks around. The facility is massive. She sets the
specimen case down on a table. Even the tiny creature seems
in awe of the place.

INT. LABORATORY, SPACE STATION

Tars shows them a prototype for the gravity machine. It is
tiny -- increasing G around two spheres that attract each
other with a tiny force.

TARS
I have catalogued almost everything
they had built here.

COOPER
Must have taken you a while.

TARS
One hundred and fifty-seven years.

Cooper shakes his head in disbelief.

COOPER
How are they keeping the lights on
in this thing?

Tars, in answer, points to a far door.

TARS
Follow me.

INT. ENGINE ROOM, SPACE STATION

A massive reinforced-concrete shell shudders with the energy
contained within it. The whole room HUMS with power.

Tars pulls up a display showing the inside of the shell:

A tiny black hole spins, spewing out massive amounts of power.
131.

TARS
It's a mini black hole. A remnant
of the big bang. It will power this
place forever.

Tars leads them on.

EXT. HANGAR, SPACE STATION

Tars leads them past an incredibly sleek fleet of spacecraft.
Cooper starts to stop, but Tars doesn't slow down.

INT. SIMULATION ROOM

In the center of the room is a giant holographic globe of
the Earth, perfect down to the tiniest detail.

COOPER
It's a map?

TARS
No. Not a map. This is a simulation
of the Earth. A perfect simulation.

Tars touches the control panel. The map zooms in over Europe.
Down onto Paris. Late 20th century:

People walk through the streets. A woman stops at a newsagent
to buy a newspaper.

Tars touches the controls again and the map zooms out.

TARS (CONT'D)
They tested each of the technologies
hundreds of times, trying to find
the one that would cause the least
damage and still allow us to leave
Earth.

Suddenly, the map lights up with atomic explosions in every
city. The sequence stops, rewinds.

This time, sped up, the Earth seems to be drying up -- great
swaths of desert grow across Europe and Asia. Massive
circular ships are constructed all over the face of the Earth.

TARS (CONT'D)
This was their best solution. A
massive version of the box we found
on the ice planet, allowing the entire
human population to escape.

At a given moment, the gravity of the Earth is dropped to
nothing and the massive ships, filled with the entire
132.

population of the Earth, lift gently off of the planet in
search of greener pastures.

Cooper turns away from the machine, bitter.

COOPER
So why didn't they return? Why didn't
they save us?

Brand is staring at the massive map.

BRAND
Because they were too late. By the
time they found this place, the people
who sent them were dead. They were
unable to fulfill their mission.

Tars points to the next room.

TARS
That was the final problem they tried
to solve.

Tars moves on.

EXT. PLATFORM, SPACE STATION

Above them, the blackness of the sky is punctuated with
hundreds of crystal shapes, faintly leaking starlight:

Wormholes. Brand looks up at them, entranced.

BRAND
Where do they lead?

Tars looks at an illuminated schematic on one wall, mapping
some of the wormholes.

TARS
There are millions of them, connecting
virtually every planetary system in
the universe. There are thousands
in our galaxy alone. But the Chinese
stopped mapping them when they found
what they were looking for.

Tars walks further. He stops.

The platform in front of them is dominated by a gigantic
version of the black box that Roth found on the ice planet,
connected to a massive power array, and pointing into the
dark space above the sphere.
133.

TARS (CONT'D)
This was their final creation. They
had to capture the mini black hole
just to have enough power to try it.

Several miles above the black box, one of the wormholes glows
far brighter than the others, crackling with radiation.

DOYLE
What does it do?

Cooper steps forward. Runs a hand on the cold, strange
material the antenna is made out of. He knows exactly what
it does.

COOPER
They weren't interested in the other
wormholes because their mission was
to return home. That one leads back
to Earth. The Earth they were told
to return to.

Tars walks to the controls for the device.

BRAND
But that's impossible...

Tars turns away from the machine.

TARS
It was only used once. The Chinese
team attempted to travel back in
time, to Earth just a few years after
they had left.

COOPER
Did they make it?

TARS
I don't know.

Doyle looks back to Cooper.

DOYLE
Do you really think it works?

Cooper looks up at the machine, suddenly determined.

COOPER
We're going to find out.

Cooper walks out of the room. Brand follows him.
134.

EXT. AIRLOCK, SPACE STATION

Brand follows Cooper as he walks up to the Endurance.

BRAND
You know it doesn't work. Time travel
isn't possible.

COOPER
You don't know that.

BRAND
Yes, I do. If it worked, the Chinese
would have suddenly discovered all
of these incredible technologies.
But they never made it.
(BEAT)
You can't go back, Cooper. You can
slow things down, but you can't ever
go back. Our home is gone.
(off his look)
You listened to all of those messages
from your family. If you had made
it back, we would already know.
There would already be some evidence.

Cooper looks at the machine.

BRAND (CONT'D)
If you try to use it, you'll die,
just like the people who built it.

She puts an arm on his shoulder.

BRAND (CONT'D)
Roth was right, Cooper. We have to
keep going. Keep exploring. We
have an obligation to try to survive.
From here we could find a thousand
places where life could thrive. And
you're going to return to the one
place where it can't.

COOPER
I made a promise.

He turns away from her, resolute.

EXT. HANGAR, SPACE STATION

Cooper and Doyle check over one of the sleek Chinese
spaceships.
135.

INT. CHINESE SPACESHIP

Cooper is checking over the controls of the ship. Brand
walks in.

BRAND
I came to say goodbye.

Cooper looks up at her.

INT. HANGAR, SPACE STATION

Cooper walks Brand back to the Endurance. The ship is packed
up and repaired. Brand is looking over their work.

COOPER
You could have taken one of the other
ships.

BRAND
This one's done all right by us so
far.

Brand holds up a small sample case containing half of the
fractal life-form.

BRAND (CONT'D)
Will you take this with you? It's
the last of its kind as well. Thought
we should double its chances of
survival. In case I'm wrong.

Cooper takes the sample and looks at the tiny creature inside,
trying to escape. He sets it inside the ship. Turns back
to her.

COOPER
Where are you going to go?

BRAND
I don't know. Up there, I guess.

She points up into the great darkness above them.

Tars steps down. Moves over to them.

COOPER
You're going, too?

TARS
I'm curious. It's my nature. See
you down the road?

Tars shakes Cooper's hand. Heads onto the Endurance.
136.

BRAND
Come with us. Please. You wanted
your whole life to explore. This is
your chance.

Cooper stares at her. This is what he has always wanted.
And he has to turn it down.

COOPER
I'm sorry. I have to find out what
happened to my sons. I promised
them.

Brand sees the resolve in his eyes. Knows there's no way to
change his mind.

BRAND
You're a man who keeps his promises.
Make me one-

She takes his hand.

BRAND (CONT'D)
After you're done... come find me.

COOPER
I promise.

They kiss passionately. Not wanting it to end but knowing
that it must. Reluctantly, they separate. Brand turns back
to the ship.

She pulls herself onto the ship. Cooper steps back outside
and watches through the tiny window as the Endurance lifts
off and disappears into the darkness.

Cooper turns away.

EXT. PLATFORM, SPACE STATION

Cooper watches as radiation pours out of the wormhole high
above them.

INT. CHINESE SPACESHIP

Cooper pulls himself on board. Doyle is at the controls.
He keys the controls and the ship lifts off.

DOYLE
Let's go home.

The two men sit in silence as the ship arcs away from the
space station and closes in on the wormhole.

Cooper hears a familiar CHIRP. He turns around:
137.

The probe they took from the ice planet is belted securely
into one of the seats, filled with the garbled machine code
of the gravitational machine.

COOPER
The probe...

Doyle looks back.

DOYLE
We get back to earth, you and I can
try to make sense of the code.
Rebuild the gravity machine.

Cooper stares at it, suddenly realizing something. He
unbuckles himself.

Cooper stands and walks over to the probe. Traces the
familiar stars and stripes carved into its side.

Cooper stares at the probe, putting it all together.

COOPER
It's going to work.

DOYLE
Of course it's going to work.

COOPER
That's not what I mean. This is the
probe I found in Galveston.

Below them, the wormhole breaks as it reaches another wormhole
mouth that the Chinese have dropped down to a lower gravity
well, creating a time machine.

The wormhole mouth is FLARING with radiation.

COOPER (CONT'D)
Brand said there'd be some evidence
we'd made it. And there was. This.
(holds up probe)
But only this. Everything will be
destroyed except for this.

He moves toward Doyle. Doyle stands.

COOPER (CONT'D)
We have to stop.

DOYLE
I don't know what you're talking
about, but you're not touching the
controls. I'm going home.
138.

Cooper moves closer to Doyle. Doyle pulls out the flair
gun. Points it at Cooper.

COOPER
You don't need to do this. We won't
make it back, but this does. The
secrets are already right on it.
Maybe someone found it. There's
hope.
(SAD)
But we don't get to go with.

DOYLE
You're not stopping me. I'm going
home.

Doyle forces Cooper into the ship's lander. Then he closes
the airlock.

Cooper pounds on the other side of the glass, trying to reason
with him.

The landing craft detaches from the ship.

INT. CHINESE LANDING CRAFT

Cooper watches, helpless, as Doyle's ship races ahead towards
the glowing wormhole mouth.

As the ship speeds toward the next wormhole, the radiation
suddenly FLARES, annihilating the ship and everything in it.

Almost everything.

Cooper's landing craft spins away from the wormhole mouth.

CUT TO:

EXT. SPACE, OUR SOLAR SYSTEM

A hole opens in the sky with a FIERY EXPLOSION. As the
radiation subsides, all that shoots out of the hole is a
vaporous wisp of atomized metal, and a burned, blackened
probe, which hurtles toward Earth.

EXT. SPACE, NEAR EARTH ORBIT

The probe collides with a satellite, hurling debris into the
upper atmosphere.

PROBE'S ONBOARD CAMERA P.O.V. --

The probe's onboard camera documents its journey. Fragments
OF VIDEO:
139.

-- The probe HURTLES through the atmosphere, toward North
America, the Gulf Coast.

-- The probe SMASHES down into a sandbar.

-- Daylight. A man is descending toward it, dangling from a
rope. It's Cooper.

-- Night. A kitchen. A little boy -- Murph -- stares at
the probe, while Cooper works at it with a blowtorch.

-- Tars pulls the probe out of the back of a plane.

-- Brand's father, older, studies the probe. Gives up.

-- Much later. People are moving around in the darkened
base, scavenging equipment.

CUT TO:

EXT. FIELD -- DAY

A combine harvester is dead in a field, service hatch opened.
A MAN is lying under the machine, working.

The man hauls himself out from under the huge machine. Dusts
himself off.

It's Murph, 30s. He looks at the FARMER who is waiting for
the verdict. Murph shakes his head.

MURPH
It's done. Auto-pilot's packed up
for the last time.

FARMER
You can't make it work a little
longer?

MURPH
Can't do anything for you. There
aren't any more parts for these.
Not anywhere.

FARMER
You don't understand. We're getting
less than a hundred pounds per acre.
We need to plant more, not less.

Murph looks around him at the pathetic crop of corn that
stretches around them. The plants are feeble, barely able
to support themselves.
140.

FARMER (CONT'D)
You've got to find us some more parts,
Murph. It's getting desperate.
Isn't there anywhere you can look?

Murph begins packing up his tools, thinking it over.

INT. HANGAR -- DAY

Murph stares at the darkened shape of a plane under a tarp.
He stares at the tarp, unsure if he wants to keep going.

He pulls the tarp off, revealing Cooper's old Piper Cub. He
checks over the engine, lights, prop. Turns the key. Fires
her up. The diesel wakes with a GRUNT.

EXT. AIRSTRIP -- DAY

Murph wheels the old plane out onto the field by hand.

EXT. SKIES OVER THE SOUTHWEST -- DAY

The ancient plane skirts the San Gabriels.

EXT. FIELD, SANTA CRUZ ISLAND

Murph sets the plane down.

He parks the plane under a copse of trees and climbs down.

He scans the horizon. Nothing. Is this the place?

EXT. FOREST -- DAY

Murph pushes his way through the undergrowth. Stops.

He's standing at the blast doors to the facility. They've
been blown open with dynamite.

INT. NASA FACILITY -- DAY

Murph lets himself inside. Lights a flare.

The place has been gutted. Thieves and scavengers have taken
almost everything.

Murph finds one of the robots, or what's left of it -- it's
been stripped, leaving only the bare composite skeleton.
The empty eye sockets stare back at Murph.

Murph looks around the place. There is nothing left to
salvage. He turns to leave. Hears a familiar CHIRP.

In the corner, under a pile of rain-soaked garbage:
141.

The probe.

No one has bothered to steal it. Murph stares at it.

INT. UNDERGROUND FACILITY -- NIGHT

Murph sweeps detritus off of an ancient computer mainframe
that survived the looting. He hooks the probe up to it.

After a minute, the screen fills with a picture of an ice-
covered planet. Then nothing. The rest of the probe's drive
is filled with garbage, noise.

Murph switches off the screen.

He stands. Begins to leave without the probe. Stops. Turns
back. Picks it up and takes it with him.

INT. KITCHEN, MURPH'S HOUSE -- NIGHT

Murph is hunched over the probe, trying to pull data off of
it with a defibrillator. He has incorporated an ancient
laptop into the chain, and is tweaking values on it, trying
to decrypt the contents.

His WIFE, several months pregnant, turns back to him from
the stove.

MURPH'S WIFE
Would you get that thing off of the
table?

Murph nods, absorbed. Keys in a final tweak to the decryption
software. Hits return.

Suddenly, the screen begins filling with data.

Murph stares at it, wide eyed.

CUT TO:

INT. BARN -- NIGHT

Murph, now in his 40s, is putting the finishing touches on a
large machine. Although slightly different, we recognize
some of the components and their configuration:

It's a crude version of the gravitational device.

Murph double checks it, then fires up a small gas powered
generator. Throws a breaker, feeding power to the unit.

The unit lights up. HUMS. But nothing happens.
142.

Murph, disappointed but undaunted, shuts it down and begins
checking it over. He hears a noise at the door. Turns back.
His daughter, Emily, 8, is standing at the door.

EMILY COOPER
Dad? You said you'd take us to the
game.

MURPH
(DISTRACTED)
Did I?

He looks at the impossible nest of wires. Shakes his head.

MURPH (CONT'D)
All right. Let me get my jacket.

Murph picks up his jacket from the workbench. Next to it on
the bench is a shortwave radio playing STATIC.

EMILY COOPER
(staring at machine)
What is it supposed to do, Dad?

MURPH
I have no idea.

Murph switches off the lights and they walk out.

After a moment, the radio CRACKLES to life in the darkness.

COOPER
(over radio, garbled)
This is the crew of the Endurance...
Murph... I'm sorry...

The signal crackles out.

CUT TO:

INT. KITCHEN, MURPH'S HOUSE -- DAY

Murph, 50s, slightly gray, sits at his kitchen table. He
hears a distant RUMBLE.

He looks up. His wife is standing by the sink.

MURPH
Where's Emily?

WIFE
Out in the barn. She's been tinkering
with your old projects.
143.

Murph stands up. The roof of the barn is visibly shaking.
He steps outside.

EXT. YARD, MURPH'S HOUSE -- DAY

Murph moves towards the barn, concerned. The shaking is
growing stronger -- the entire structure is buckling.

Emily, now 18, backs out of the barn.

EMILY COOPER
Dad... I'm sorry... I made some
changes to the machine. I think I
did something wrong.

Murph puts an arm around his daughter and as they watch, the
entire barn IMPLODES. Their tractor begins sliding towards
the wreckage of the barn, chunky tires plowing up the soil.

Finally, the RUMBLING STOPS as the power lines short out in
a FIERY display.

As the dust clears, Murph and his daughter examine the mess:

The entire barn has been crushed into a tiny ball.

Murph looks at his daughter.

MURPH
Do you remember what you changed?

Wide-eyed, she thinks about it. Then nods.

CUT TO:

EXT. EARTH, 2320 -- DAY

This is North America. But it doesn't look much like it.

Mother Nature has just about wiped the slate clean. Most of
the vegetation is gone, and unchecked winds sweep across the
barren plains. Patches of ice lie think on the ground, as
if a heavy snow has come and gone.

SUPER TITLE: "TWO HUNDRED YEARS LATER"

One of the Chinese spaceships descends through the thick
clouds above and settles gently onto the plain.

The hatch opens and Cooper steps out. He takes a cautious
look around. He is holding the fractal life in its small
container.

The clouds are threatening, but the weather looks calm enough
right here.
144.

Cooper starts to walk.

EXT. COLLAPSED HOUSE -- DAY

Remarkably, part of Cooper's old house is still standing.

INT. COLLAPSED HOUSE -- DAY

Cooper stands in the middle of his kitchen. Two walls are
missing and the rest is collapsed in a heap. But he can
still see where he used to feed his kids breakfast.

He has kept his promise. Several hundred years too late.

Cooper hunkers down, staring at the space where his kids
used to be. Rainwater covers the ancient formica.

It has taken him years to finally reach this place. He has
had plenty of time to come to grips with what he might find.
But nothing has prepared him for this:

He is completely alone. Nothing is left.

INT. COLLAPSED FARMHOUSE -- NIGHT

Cooper is still sitting there when the ice storm hits.

Unchecked by trees or vegetation, the wind rockets through
the house, blasting Cooper and pelting what's left of the
structure with fist-sized hail.

Cooper takes shelter against the remaining wall. He's going
to have to sit this one out -- the hail and winds are the
brutal descendants of the weather he knew. They'll finish
him off if he steps back outside.

As he watches, the pool of water on the kitchen floor freezes
over in seconds.

INT. COLLAPSED FARMHOUSE -- DAWN

Cooper shivers, pressed against the wall. The storm is still
raging outside. He is freezing to death. He has to move
now or he will die. He pulls the hood tight around his face
and stumbles outside.

EXT. SNOWBOUND FIELD -- DAY

Cooper makes his way through the blinding snow. He tries to
find his way, but the ship has been consumed by the blizzard.

He stumbles to the ground, dropping the glass case with the
fractal wildlife in it. The case shatters.

Cooper tries to stand back up, but his strength is dwindling.
145.

As he watches, the fractal wildlife creeps tentatively out
of its broken habitat. It forms together against the cold.

After a moment, it burrows into the ice. As it does, the
ice glows faintly. It seems to be right at home.

Cooper laughs, glimpsing the outline of a plan. Was this
what the beings who made the wormhole intended all along?

Cooper suddenly spots the outline of the ship through the
driving snow. He stumbles back up to his feet and struggles
a few more steps, then stumbles again, spent.

Finally, he sits down in the snow to die.

As his senses flicker in and out, he is struck with memories
of his boys, so vivid he reaches out for them, crawling
forward in the snow.

He stops, and laughs, remembering what Case told him about
what happens when humans die.

He struggles to his feet and stumbles a few more feet,
eventually coming to rest just steps from the ship.

Cooper takes a final step. Finally, he collapses under his
ship, as the wind continues to HOWL around him.

As the snow clears for a moment, Cooper is alone on a vast
arctic tundra. He will die alone.

BLACK

FADE IN:

INT. HOSPITAL ROOM -- DAY

Cooper wakes.

He is in a sunlit room. A breeze rustles the curtains as it
makes its way in through a large open window.

Cooper sits up. As he a does, a control panel on the wall
TONES gently, as if in response to his movement.

He stands and looks around. He can see sunlight through the
open windows and hear people -- kids YELLING as they play.
He moves toward the window. Reaches for the curtains. Before
he can, the door opens behind him.

A WOMAN in a white coat steps in, smiling warmly.

DOCTOR
Good morning. Don't go outside just
yet, Mr. Cooper.
(MORE)
146.

DOCTOR (CONT'D)
(offers him a pill)
This will help with the
disorientation.

Cooper opens his mouth to talk, but his voice is cracked.
He gives up. Swallows the pill.

DOCTOR (CONT'D)
Wait a minute for that to take effect.
It can be a bit of an adjustment.
(looks him over)
You had some frostbite. Nothing too
serious.

As she talks, Cooper looks past her to the window.

COOPER
Where am I?

DOCTOR
(SMILES)
It's a bit of a coincidence, really.
When the rangers found you, we were
the nearest facility.

COOPER
What's coincidence? What is this
place?

DOCTOR
We have a lot to show you.

The doctor reaches for the curtains. She offers him a hand.
Cooper declines the help and steps outside.

EXT. HOSPICE, COOPER STATION -- DAY

Cooper is standing on a rooftop deck of a four-story building
in a medium-sized city surrounded by fields. But as the
road and the buildings stretch into the distance, the
landscape curves up, not down.

The entire landscape is contained within a huge cylinder-
shaped space station.

Cooper stumbles, and reaches instinctively out. The doctor
catches him.

DOCTOR
You're OK. We get this from people
who move here from planetary colonies
all the time.
147.

COOPER
Where... where are we?

DOCTOR
Like I said. It was a coincidence.
There was a facility closer to Earth,
but they had a problem, so you wound
up here.
(off his look)
This is the Space Station Joseph A.
Cooper.

Cooper takes in the incredible surroundings. A thousand
feet above them, black specks are sprinkled over an ocean of
green -- Jersey milking cows grazing in a field of wild grass.

DOCTOR (CONT'D)
I've got someone who wants to meet
you.

Cooper looks at her.

INT. INTENSIVE CARE ROOM, HOSPICE, COOPER STATION -- DAY

Cooper steps inside. The room is dark, still, the only noise
is the labored RATTLE of an old man struggling to breathe.

Cooper steps closer to the bed. The man's skin is paper-
thin. He is ancient.

DOCTOR
He was moved here after they found
you. He's a little old for a
transfer, but they made an exception.

Cooper hovers at the back of the room, unsure. He turns to
the doctor, questioning. Then he notices the pictures on
the old man's desk:

There are dozens of them. Children, grandchildren. Then
the older ones -- the man's own parents. Grandparents.
Cooper spots a tiny framed picture with someone he recognizes:

Murph, 80 years old, surrounded by his daughter and her
family. They are standing in front of a re-opened Cape
Canaveral, and a huge spaceship under construction.

Cooper picks up the picture and stares at it.

The doctor points to a shy little boy hiding behind Murph's
leg in the picture.

DOCTOR (CONT'D)
That's him.
148.

She points to the old man lying in the bed.

DOCTOR (CONT'D)
His name is Anthony Welling. Anthony
Cooper Welling.
(SMILES)
He's your great great grandson.
He's been waiting a long time for
you.

Cooper's eyes well with tears. He steps over to the bed and
looks down at the ancient man, teetering on the edge of death.

The old man looks at him, eyes widening in excitement. He
strains, trying to reach the bedside table. He's trying to
reach the drawer. Cooper helps him open it.

Inside is a simple, familiar wristwatch. The old man
carefully takes out the watch. He gives the watch a few
winds and, hands shaking, offers it to Cooper.

Cooper, eyes filling with tears, closes his hand over the
old man's hand, enveloping both the watch and the man's hand.

CUT TO:

EXT. CORNFIELD, COOPER STATION -- MORNING

Cooper is sitting in a well-appointed office. A middle-aged
BUREAUCRAT smiles at him from the far side of a huge desk.

ADMINISTRATOR
You're a hero, Mr. Cooper. Let's
just start off by saying that. It's
an incredible and... unexpected honor
to have you here with us.

Cooper smiles, uncomfortable.

ADMINISTRATOR (CONT'D)
None of us would be here without the
efforts of you and the other
crewmembers of the Endurance.
(smiles, unconvincingly)
So I don't want you to take this the
wrong way. But there are some
questions I've been told to ask.

The man looks petrified, like he's been instructed to grill
George Washington on his expense reports.

COOPER
Shoot.
149.

ADMINISTRATOR
The rangers who found you reported
that you had released a sample of an
alien life-form into the wild. Which
is, unfortunately, against
regulations.

COOPER
It was last of its kind. Their planet
was destroyed.

The administrator cues up a series of images on his computer.

ADMINISTRATOR
The rangers attempted to isolate the
life-form, but it had already spread
out of control. It seems to be
thriving.

He shows Cooper a satellite image of north america. A
considerable portion of the frozen tundra is glowing.

Cooper begins laughing. Which makes the administrator even
less comfortable.

ADMINISTRATOR (CONT'D)
Can you tell me why you... elected
to release the life-form back on
earth?

Cooper is still laughing.

COOPER
Because that was the plan.

ADMINISTRATOR
Whose plan?

COOPER
(SMILES)
I don't know.

The administrator tries to smile back. Makes a few notes in
his file. Changes the subject.

ADMINISTRATOR
My assistant tells me you've applied
for a position with the exploration
fleet.

COOPER
Feel like I should be pulling my
weight.
150.

ADMINISTRATOR
That's admirable, Mr. Cooper. The
truth is, most of the fleet's
personnel are automated. There are
a small number of crewed ships. But
there are great numbers of candidates.
Very well trained candidates.

COOPER
I was hoping to enroll in a course.
Try to get myself up to speed on the
new systems.

ADMINISTRATOR
I don't want you to take this the
wrong way, Mr. Cooper -- like I
said, you're a hero. But the truth
is we have somewhat limited resources.

Cooper remembers this conversation. He looks down.

COOPER
No one's heard anything from Brand?

ADMINISTRATOR
I'm sorry. Officially, she's been
listed as missing for over 200 years.
Mind you, I guess you turned up
eventually, didn't you?

COOPER
Am I really going to hurt anybody by
going to look for her? I just need
a small ship. I made a promise.

The bureaucrat looks down. Is he really going to have to
tell this guy the lay of the land?

ADMINISTRATOR
Listen. Mr. Cooper. You're a hero.
You're the oldest man in the human
race. Don't you want to take it
easy?
(off his look)
I hope you understand, we all you
hold you in the highest possible
regard.
(QUIET)
Which is why they're never going to
let you go off by yourself in a
spaceship. I'm sorry.

Cooper looks at his hands. He's got a couple centuries on
the bureaucrat in Earth years, but looks ten years younger.
He puts his hands in his pockets.
151.

ADMINISTRATOR (CONT'D)
I've got some good news, however.
(BIG SMILE)
We all know about your early life,
Mr Cooper. I wrote a paper on it
when I was a boy. And I think we
found something you'll really enjoy.

EXT. CORNFIELD, COOPER STATION -- DAY

Corn blows in an artificial breeze. A red tractor makes its
way through the field, which curves gently up in the distance.

ADMINISTRATOR (V.O.)
The machines do most of the work, of
course, but we were able to get you
a few acres. You're going to be a
farmer again.

After a moment, the tractor stops. Cooper climbs down from
the seat. Looks at the front steering linkage, which is
jammed with an errant tree branch. He wipes his forehead
and begins working the branch out of the machine.

He looks miserable.

A robot, a similar unit to Tars, walks over. Offers Cooper
a bottle of water. Cooper accepts it.

EXT. HANGAR BAY, COOPER STATION

Cooper stands on an observation deck, high above the hangar
floor. Below him, bright young things in uniforms climb
into sleek-looking spaceships and prepare to set out.

EXT. BASEBALL DIAMOND, COOPER STATION

Cooper sits in the stands, listening to the familiar crack
of the bat as an intramural team from the university
practices.

Cooper watches. He looks bored.

The kid up to bat cracks a pop fly. For a second, the catcher
shuffles back and forth, trying to get himself into position.
But the ball never returns. The catcher YELLS out a warning.

Above, the ball begins to slowly fall up, not down, toward
the town center above.

After a second, the ball smashes through a skylight of a
building high above them.

Cooper watches as the kid rounds the bases, laughing.
152.

INT. KITCHEN, FARMHOUSE, COOPER STATION -- DAY

Cooper's robot sits at the kitchen table. Cooper is fiddling
around in the back of his head.

ROBOT
Settings: general settings, security
SETTINGS--

COOPER
Curiosity. New level setting. 100
percent.

ROBOT
Confirmed. Would you like to make
any additional changes?

COOPER
Sense of humor. New level setting.
100 percent. Wait.
(THINKS)
80 percent.

He begins putting the robot back together.

EXT. FARMHOUSE, COOPER STATION -- TWILIGHT

Cooper sits on his porch, joined by the same robot as before.
They watch as the space station rotates lazily out of
alignment with the local star, casting the inside of the
cylinder into shade, then darkness.

The shadow races past them. Another day. Another night.

EXT. HANGAR, COOPER STATION

A maintenance worker finishes looking over one of the sleek-
looking spacecraft. He packs up his tools and heads out.

After a moment, two figures pick their way across the hangar
floor, sticking to the shadows.

As they reach the first ship in the line, we get a better
look. It's Cooper and his robot pal. The robot is wearing
a baseball cap and carrying a toolbox.

Cooper gestures to the robot, who sets down the toolbox with
a click against the mirror-like floor.

Cooper shakes his head, annoyed, at the robot, and puts his
finger to his lips. The robot nods, bashful.

Cooper waves a small handheld computer near the skin of the
ship until it lights up. Then he punches in a few codes.
Nothing happens. He punches in a few more.
153.

Suddenly, the hatch opens with a HISS.

INT. SHIP

Cooper moves quickly to the cockpit of the ship. Looks over
the controls. The robot straps himself in next to him.
Cooper looks up through the windows.

The inky black void of space beckons.

Cooper smiles and reaches for the controls.

COOPER
Where do you want to go first?

The robot thinks it over.

EXT. HANGAR, COOPER STATION

The technician walks back into the hangar. He walks along
the row of ships till he reaches the last one.

It's not there.

He looks out into the blackness of the void. Sees a tiny
glowing speck, getting smaller and smaller.

END

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
