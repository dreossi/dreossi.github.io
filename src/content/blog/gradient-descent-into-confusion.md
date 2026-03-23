---
title: "Gradient Descent into Confusion"
date: "2026-03-22"
description: "On how AI renamed mathematics, and what that costs us."
---

### Opening scene: the moment of recognition

About fifteen years ago, the first time I heard the term backpropagation*, I imagined something entirely new, a novel algorithm that somehow spreads knowledge through a network of artificial neurons. I assumed
that the mechanism behind machine learning had to be something Computer Science or Mathematics had never seen before.Listen to the sound of the word:* backpropagation*. What a compelling music compared to something like* counting sort*,* discrete finite automata*, or* first-order derivative*.*

Then, studying its definition, I learned that backpropagation uses the loss function (a measure of model error) to compute partial derivatives, providing the information needed to adjust the model's parameters and improve its predictions; hence, a "machine that learns."
A mix of confusion and familiarity surprised me. This looked like an *optimization problem* where the loss is the objective function to minimize and backpropagation is the *chain rule*, both concepts that I learned early in optimization and analysis classes in college.
I remember thinking, am I oversimplifying or missing something?
If not, why the need to coin a new term?

It turns out that backpropagation IS the chain rule. It was surprising to me that an entire thriving domain coined and accepted a new term for something that had existed for more than 300 years[][].


### Zoom out: the pattern is not isolated
Backpropagation wasn't an exception. The pattern on renaming terms in AI wasn't isolated. Take *regularization*: in statistics it is constrained optimization whereas in ML it's framed as "preventing overfitting",
a blend of methods that includes adding penalty terms to the loss function, dropout, data augmentation, larger dataset, reducing the a model capacity, etc.

In statistics, a *latent space*, which comes from Latin latere, "to lie hidden", is assumed to exist but can't be directly observed. In ML, an
embedding in the latent space is fully observable compressed information; it's just not human-interpretable.
And if you were wondering, an *embedding*, is a vector; *pooling* is downsampling; a *logit* is a raw score.

And the there is the *Transformer*, the T in ChatGPT. It has nothing to do with electrical transformers or Japanese robots. It's called like that because it "transforms input representations into output representations through its layers" [2,3]. But isn't that the case for any neural network?

Is seems that there's quite confusion in ML... or is it AI? What's the
difference between the two?


### Zoom in: why does this happen?

It is common in the history of science that independent discoveries led to the same results. Scientists working in silos arriving at the same place with different names. The classic example is Newton and Leibniz independently discovering calculus in 1600s [4].

But silos don't explain it all. Hinton et al., in the paper that introduced backpropagation, state: "the key insight is that the *chain rule* of calculus can be used to compute efficiently the gradient of a cost function with respect to the weights". They knew.
They knew the math term and still renamed the method
after its behavior rather than its math foundation.

Naming something after its behavior suggests lowers the barrier to entry. Back-propagation is self-explanatory and it conveys the visual idea of the
error adjustment floating backwards through the network.
We can all agree that "training a neural net via backprop" is lower friction than
"find parameter values that make the output of a composite non-linear function as close as
possible to the correct answer, by using the chain rule to compute how much each parameter contributed to
the error and repeatedly tweak each parameter in the direction that reduces it".

Beyond accessibility, there is also bias of the biological metaphor.
The goal of the field is to build artificial intelligence, and framing inventions as mimicking the brain makes them feel closer to
that goal. Terminology follows the framing, not the
underlying math. Terms like artificial neural network, attention, or Long Short-Term Memory close the gap
to an artificial brain in a way that composite non-linear function, weighted dot product, or gated state vector can't do.

Finally, there might be a less noble reason: naming is how you claim it.
Call it the chain rule and you can't publish it (it already belongs to Leibniz and/or Newton).
Name an architecture AlexNet and it belongs to Alex forever.
Coin "transformer" and your name is embedded in every ChatGPT conversation.
Inventions and their names are how academia builds prestige and careers.
The incentive to rename is structural and human, not malicious.



### Resolution: reframe the opening

Fifteen years ago, I had everything I needed.
The chain rule was already in my head, embeddings existed
in my mind as high-dimensional points, and composite functions I had derived already provided the backbone for neural networks. What I was missing wasn't knowledge, it was the experience and confidence to look past the name. Knowing a technique and recognizing it are two different things.


M. Housel in "Same As Ever", describes two failure modes when navigating imperfect systems: "zero tolerance", if you can't accept any irrationality you can't function in a system that involves other people and "full acceptance", if you accept any nonsense uncritically, the world will eat you alive.

The same applies to AI terminology. The antidote isn't mathematical perfectionism or engineer skepticism, but rather the habit of accepting
a certain level of uncertainty and asking "what is this, really?" before accepting names as definitions.


One last thing: the psychological journey from hearing a term for the first time to either recognizing it or realizing you already knew it has a well-established name in the AI field. It's called *gradient descent into confusion*.




[1] Some purists might argue that the chain rule is the mathematical
  foundation while backpropagation is the implementation.

[2] https://discuss.huggingface.co/t/why-are-transformers-called-transformers/11607
[3] https://www.quora.com/Why-are-transformers-in-the-machine-learning-sense-called-transformers
[4] Infinite Powers
