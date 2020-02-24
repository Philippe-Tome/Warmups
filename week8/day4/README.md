# Alternating Split

For building the encrypted string:

- Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
- Do this `n` times!

To do the above, you must build an `encrypt(message, n)` method that performs like this:

```
encrypt("This is a test!", 1) -> "hsi  etTi sats!"
encrypt("This is a test!", 2) -> "s eT ashi tist!"
```
