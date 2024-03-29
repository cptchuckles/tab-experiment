# Tab Experiment

I read an [article on Dev.to](https://dev.to/flippedcoding/how-to-put-arrows-at-the-bottom-of-a-div-43i) about how to add arrows to the bottoms of `div`s.
This gave me the idea to add arrows to the sides of `div`s to use as
a tab indicator of sorts.

This experiment resulted in finding a completely different way of doing arrows.
I used `clip-path` to generate the arrow, which allowed me to do contiguous shadows
for both the sidebar and the arrow, and also to smoothly animate the arrow
going in and out when selected.

The tabs control what content is displayed using a `data` attribute and a short
function to find the matching `div` with the matching `id`.

See it live on [github pages](https://cptchuckles.github.io/tab-experiment/)
