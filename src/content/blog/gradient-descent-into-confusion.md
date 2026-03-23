---
title: "Gradient Descent into Confusion"
date: "2026-03-22"
description: "On how AI renamed mathematics, and what that costs us."
---

### Opening scene: the moment of recognition

About fifteen years ago, the first time I heard the term *backpropagation*, I imagined something entirely new — a novel algorithm that somehow spreads knowledge through a network of artificial neurons. I assumed that the mechanism behind machine learning had to be something Computer Science or Mathematics had never seen before. How else could you explain why AI took so long to take off? And listen to the sound of the word: *backpropagation*. What a compelling music compared to something like *counting sort*, *discrete finite automata*, or *first-order derivative*.

Then, studying its definition, I found something unexpected: backpropagation uses a measure of error to compute partial derivatives and adjust the model's parameters — an optimization problem, where the error is the objective function to minimize. I had seen this before. The chain rule, the objective function, the iterative adjustment — these were concepts from my optimization and analysis classes in college. A mix of confusion and familiarity hit me: am I oversimplifying, or is this just the chain rule with a new name?

It turns out that backpropagation IS the chain rule. An entire thriving domain had coined and accepted a new term for something that had existed for more than 300 years.

### Zoom out: the pattern is not isolated

Backpropagation wasn't an exception. The pattern of renaming or overloading existing terms runs through the field like a thread. Take *regularization*: in statistics it is constrained optimization — a well-defined mathematical concept. In ML it gets reframed as "preventing overfitting", an umbrella that quietly absorbs penalty terms, dropout, data augmentation, and model capacity reduction under a single, vague label.

In statistics, a *latent space* — from Latin *latere*, "to lie hidden" — is assumed to exist but can't be observed directly. In ML, an embedding in the latent space is fully observable; it's just not human-interpretable. And while we're at it: an *embedding* is a vector; *pooling* is downsampling; a *logit* is a raw score.

And then there's the *transformer* — the T in ChatGPT. It has nothing to do with electrical transformers or Japanese robots. It's called that because it "transforms input representations into output representations through its layers." But isn't that the case for any neural network?

It seems there's quite a bit of confusion in ML... or is it AI? What's the difference between the two?

### Zoom in: why does this happen?

It is common in the history of science for independent discoveries to converge on the same result — scientists working in silos, unaware of each other, arriving at the same place with different names. The classic example is Newton and Leibniz independently discovering calculus in the 1600s.

But siloed discovery doesn't fully explain backpropagation. Hinton et al., in the paper that introduced it, explicitly state: "the key insight is that the *chain rule* of calculus can be used to compute efficiently the gradient of a cost function with respect to the weights." They knew. They knew the math term, and still named the method after its behavior rather than its foundation.

That choice wasn't arbitrary — it was strategic. Naming something after its behavior rather than its math lowers the barrier to entry. "Backpropagation" is self-explanatory in a way that "reverse-mode automatic differentiation" is not — it conjures a visual: error flowing backwards through the network, layer by layer. We can all agree that "training a neural net via backprop" is lower friction than "find the parameter values that make the output of a composite non-linear function as close as possible to the correct answer, by using the chain rule to compute how much each parameter contributed to the error and repeatedly nudging each one in the direction that reduces it."

Beyond accessibility, there is a subtler bias: the pull of biological metaphor. The goal of the field is to build artificial intelligence, and framing inventions as mimicking the brain makes them feel closer to that goal. Terminology follows the framing, not the underlying math. *Artificial neural network*, *attention*, *Long Short-Term Memory* — each closes the gap to an artificial brain in a way that *composite non-linear function*, *weighted dot product*, or *gated state vector* never could.

Finally, there is a less noble reason: naming is how you claim it. Call it the chain rule and you can't publish it — it already belongs to Leibniz. Name an architecture AlexNet and it belongs to Alex forever. Coin "transformer" and your name is embedded in every ChatGPT conversation that ever happens. Inventions and their names are how academia builds prestige and careers. The incentive to rename is structural, human, and entirely predictable.

### Resolution: reframe the opening

Fifteen years ago, I had everything I needed. The chain rule was already in my head, embeddings existed in my mind as high-dimensional points, and composite functions I had derived many times already provided the backbone for what I was being taught. What I was missing wasn't knowledge — it was the experience and confidence to look past the name. Knowing a technique and recognizing it under a different label are two different things.

Morgan Housel, in *Same As Ever*, describes two failure modes when navigating imperfect systems. Zero tolerance — refusing to accept any irrationality — and you can't function in a world that involves other people. Full acceptance — swallowing every piece of nonsense uncritically — and the world will eat you alive. The optimal amount of nonsense to tolerate sits somewhere in between.

The same applies to AI terminology. The antidote isn't mathematical perfectionism or reflexive skepticism, but the habit of asking "what is this, really?" before accepting a name as a definition — tolerating enough imprecision to keep moving, while never losing the thread back to the underlying math.

One last thing: the psychological journey from hearing a term for the first time to realizing you already knew it has a well-established name in the field. It's called *gradient descent into confusion*.
