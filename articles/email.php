<div class="article md">

# Protecting Email Addresses

Email has been around for over 40 years in one form or another. Spam has been with us for almost that long. In 2009, Microsoft estimated that [over 97% of email messages were spam](http://news.bbc.co.uk/2/hi/technology/7988579.stm). It's kind of hard to ignore that.

There are a lot of smart people working hard to stop the spam that gets sent from showing up in your inbox. There are also a lot of things you can do to stop spammers from getting your address in the first place.

Here's a run-down of the relevant options:

## _Option 1:_ Do nothing
One author votes that we [stop obfuscating email](http://jasonpriem.org/2009/05/stop-obfuscating-email/) altogether, suggesting: "Spam is a problem for you–obfuscation makes it a problem for your users."

It's an interesting argument for the sake of argument, but I think it's kind of stupid in practice. I'd rather not put my email address out there for spammers to harvest, no matter what theoretical argument there may be in support of that.

Some have suggested that [Gmail's](http://www.gmail.com) filter is good enough to handle all of the spam that might come in, so there's no real reason to bother hiding your address. Again, this is not a real solution. Why expose myself to potential pain (even if my filter is good) when a few precautions will give me an _additional_ (and potentially better) buffer from the nasties?

I don't think I'll jump in the shark tank just because I've got some decent shark repellent.


## _Option 2:_ Obfuscation

Obfuscation is a technique of scrambling or hiding an email address from email-harvesting robots while still (hopefully) keeping it accessible to legitimate users.

Aside from the fact that [some of these obfuscators look like spam sites themselves](http://anti-spam-mail-tag-generator.software.informer.com/), it seems to me that if the email address is accessible in _some_ way, hackers could reasonably circumvent any barriers you have in place, and get to it.

In other words, it's better than nothing (often a LOT better), but it's not a failsafe.


### Images

Since spam bots usually parse HTML text, displaying an email address as an image should circumvent that. It also frustrates users, especially those who use a screen reader or otherwise rely on the text content of a page. 

Additionally, any spammer with OCR software could potentially still extract the text from the image. You could always mangle the letters a bit to get around the software, but I think people have enough trouble reading CAPTCHAs already. Why make them do that to get your email address too?

Images are not a great approach.

### Simple Text Munging

email [at] address [dot] com


### HTML
http://www.albionresearch.com/misc/obfuscator.php

http://www.wbwip.com/wbw/emailencoder.html

<blockquote>This technique is not by any means a foolproof solution&mdash;high end software &hellip; can still sniff out your email address regardless. But this technique will still certainly go a long way towards minimizing your exposure to less capable automated email harvesters.</blockquote>


### Javascript

<pre><code>
&lt;script type="text/javascript"&gt;
 var name = 'user';
 var at = '@';
 var domain = 'example.com';
 document.write(name + at + domain);
&lt;/script&gt;
</code></pre>


http://www.spamspan.com/


### Combination of the above (Apache, PHP, Javascript)

http://alistapart.com/article/gracefulemailobfuscation



##Contact form



##Authentication

- http://en.wikipedia.org/wiki/Email
- http://en.wikipedia.org/wiki/Email_spam

</div>