     //Document Object Model(DOM)
     //--------------------------
     //->document->html doc
     //window->browser

     //document
    console.log(document);

    //head
    console.log(document.head);

    //tittle
    console.log(document.title);
    document.title='JavaScript webseries';

    //body
    console.log(document.body);

    //nav
     let navtag=document.querySelector('nav');
      console.log(navtag);

    //anchor tag
    let anchorTag=document.querySelector('nav a');
    console.log(anchorTag);

    //innerText
    let theText=anchorTag.innerText;
    console.log(theText);

    //change the innerText
     anchorTag.innerText='Srihari Pothula'

   //h1 Tag
   let h1Tag=document.querySelector('#msg');
    console.log(h1Tag);
    h1Tag.innerText="GOOD EVENING"

    //Styles
    h1Tag.style.backgroundColor='limegreen';
    h1Tag.style.Color='#fff';
    h1Tag.style.textAlign='center';
    h1Tag.style.padding='20px';
    h1Tag.style.boxShadow='5px 10px black';
    h1Tag.style.marginTop='20px';

    //JavaScript events
/* onabort: null
onafterprint: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onappinstalled: null
onauxclick: null
onbeforeinstallprompt: null
onbeforeprint: null
onbeforeunload: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncuechange: null
ondblclick: null
ondevicemotion: null
ondeviceorientation: null
ondeviceorientationabsolute: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
ongotpointercapture: null
onhashchange: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onlanguagechange: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmessage: null
onmessageerror: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onoffline: null
ononline: null
onpagehide: null
onpageshow: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onpopstate: null
onprogress: null
onratechange: null
onrejectionhandled: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onstorage: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onunhandledrejection: null
onunload: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkittransitionend: null
onwheel: null */