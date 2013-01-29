
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.



/* Pretty Typography
 * Plugin author: Nate Walton
 * Code for quotes and hyphens adapted from http://www.leancrew.com/all-this/2010/11/smart-quotes-in-javascript/
 */
(function( $ ){

  $.fn.smartType = function( options ) {
    
    /* Settings */
    
    var defaults = {
      quotes  : true,
      hyphens : true,
      widows  : true,
      hanging : true,
      hangingClass : 'hanging'
    };
    
    var settings = $.extend(defaults, options);





    /* Functions */
    
    // Replace Quotes
    var replacequotes = function(t) {
      
      // Text contains markup. This is a little complicated...
      if(false) {
        /* Code here to handle stuff with markup. 
          Probably adapt something from the perl script here:
          http://daringfireball.net/2002/08/movable_type_smart_quote_devilry
        */
      }
      // No markup, good to go...
      else {
        t = t.replace(/(^|[-\u2014\s(\["])'/g, "$1&#8216;");       // opening singles
        t = t.replace(/'/g, "&#8217;");                            // closing singles & apostrophes
        t = t.replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1&#8220;"); // opening doubles
        t = t.replace(/"/g, "&#8221;");                            // closing doubles
      }
      return t
    }
    
    // Replace hyphens
    var replacehyphens = function(t) {
      return t.replace(/--/g, "\u2014"); // em-dashes
    }
    
    // Widows
    var suppresswidows = function(t) {
      return t.replace(/(\s)(?=\S*$)/, "&nbsp;");
    }

    // Hanging punctuation
    var hangpunctuation = function(el, cl) {
      var t = el.html().charAt(0);
      var hang = false;
      
      if(t == '"' || t == '“')            hang = true;
      else if(t == "'" || t == "‘")       hang = true;
      else if (t.indexOf('&ldquo;') === 0) hang = true;     
      else if (t.indexOf('&lsquo;') === 0) hang = true;
      else if (t.indexOf('&#8220;') === 0) hang = true;
      else if (t.indexOf('&#8216;') === 0) hang = true;
      else if (t.indexOf('&#8216;') === 0) hang = true;
      
      if(hang) el.addClass(cl);
    }



    
    /* Execute */

    return this.each(function() {
      
      var el = $(this);
      var txt = el.html();
      
      if (settings.quotes)  txt = replacequotes(txt);
      if (settings.hyphens) txt = replacehyphens(txt);
      if (settings.widows)  txt = suppresswidows(txt);
      if (settings.hanging) hangpunctuation(el, settings.hangingClass);      
      
      el.html(txt);

    });

  }  
})( jQuery );