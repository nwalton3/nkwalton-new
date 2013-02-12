<div class="article md">

# Protecting Email Addresses #

Email has been around for over 40 years in one form or another. Spam has been with us for almost that long. In 2009, Microsoft estimated that [over 97% of email messages were spam](http://news.bbc.co.uk/2/hi/technology/7988579.stm). It's kind of hard to ignore that.

There are some very smart people trying to get your email address. And while here are also a lot of smart people working hard to stop the spam from showing up in your inbox, there's also a lot you can do to stop spammers from getting your address in the first place.

Here's a run-down of the relevant options:


## Trust your email provider #


## _Strategy 1:_ Do nothing #

One author votes that we [stop obfuscating email](http://jasonpriem.org/2009/05/stop-obfuscating-email/) altogether, suggesting: "Spam is a problem for you–obfuscation makes it a problem for your users."

It's an interesting argument for the sake of argument, but I think it's kind of stupid in practice. I'd rather not put my email address out there for spammers to harvest, no matter what theoretical argument you have in support of it.

Some have suggested that [Gmail's](http://www.gmail.com) filter is good enough to handle all of the spam that might come in, so there's no real reason to bother hiding your address. What? *This is **not** a real solution.* Why expose myself to potential pain (even if my filter is really good) when a few precautions will greatly reduce or even *eliminate* my risk?

I don't think I'll jump in the shark tank just because I've got some decent shark repellent.

Verdict: *really bad idea*



## Front-end Obfuscation #

Obfuscation is a technique of scrambling or hiding an email address from email-harvesting robots while still (hopefully) keeping it accessible to legitimate users.

Aside from the fact that [some of these obfuscators look like spam sites themselves](http://anti-spam-mail-tag-generator.software.informer.com/), it seems to me that if the email address is accessible in _some_ way, hackers can reasonably circumvent any barriers you have in place.

In other words, it's better than nothing (often a *lot* better), but it's not a failsafe.



## _Strategy 2:_ Use Images #

Since spam bots usually parse HTML text, displaying an email address as an image should circumvent that. It also frustrates users, especially those who use a screen reader or otherwise rely on the text content of a page. 

Additionally, any spammer with OCR software could potentially still extract the text from the image. You could always mangle the letters a bit to confuse the software, but I think people have enough trouble reading CAPTCHAs already. Why do that to your email address too?

Verdict: *too many downsides to be viable*



## _Strategy 3:_ Simple Text Munging #

You've probably seen people "mask" their address something like this:

<pre><code>email [at] address [dot] com</code></pre>

While that will certainly fool bots that are looking for emails using a standard email format, I think I could write code to additionally pick up this format in 15 minutes or less. That doesn't exactly inspire my confidence in this method.

Verdict: *helpful, but weak*




## _Strategy 4:_ HTML Entities #

http://www.albionresearch.com/misc/obfuscator.php

http://www.wbwip.com/wbw/emailencoder.html

<blockquote>This technique is not by any means a foolproof solution&mdash;high end software &hellip; can still sniff out your email address regardless. But this technique will still certainly go a long way towards minimizing your exposure to less capable automated email harvesters.</blockquote>



## _Strategy 5:_ Javascript interpretation #

Here's a pretty simple method I've used myself before (but vow never to use again):

<pre><code>&lt;script type="text/javascript"&gt;
 var name = 'user';
 var at = '@';
 var domain = 'example.com';
 document.write(name + at + domain);
&lt;/script&gt;</code></pre>

This and [other methods](http://www.spamspan.com/) work on the premise that email-harvesting bots can't interpret javascript. This is probably true. On the other hand, as soon as someone makes a smarter bot this protection goes out the window.

I don't think I want to wait around for that (assuming it hasn't already happened).

Verdict: *sometimes secure, but still exposed*



### Combination of the above (Apache, PHP, Javascript) #

http://alistapart.com/article/gracefulemailobfuscation



##Contact form #

[The Perfect Contact Page](http://www.binaryanvil.com/build-it-right/the-best-contact-page.html)


##Authentication #

- http://en.wikipedia.org/wiki/Email
- http://en.wikipedia.org/wiki/Email_spam

</div>