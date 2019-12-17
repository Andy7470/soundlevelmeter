
//Disqus code..
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://sound-level-meter-1.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
//

window.onload=function(){
 
	img = document.getElementsByTagName("img");
 
	for(var i=0;i <img.length; i++){
		img[i].addEventListener("click", function (){
				console.log("click");
			if (this.className === "selected"){
				this.className = "";
			}
			else if(this.className === "holberton"){
				return 0;
			}
			else{
				this.className += "selected";
			}
		}, false);
	}
 
}