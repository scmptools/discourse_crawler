function listenForInput() { 
			// Get the input field
			var input = document.getElementById("urlInput");
			// Execute a function when the user presses a key on the keyboard
			input.addEventListener("keypress", function(event) {
				// If the user presses the "Enter" key on the keyboard
				if (event.key === "Enter") {
					// Cancel the default action, if needed
					event.preventDefault();
					// Trigger the function
					var urlToScrape = document.getElementById("urlInput").value;
					
					let currentURL = ""
					
					currentURL = urlToScrape
					
					var div = document.getElementById('terminal');
					var p = document.createElement('h2');
					p.setAttribute("id", 'crawling')
					p.setAttribute("class", 'blink')
					p.innerHTML = "Currently Crawling..."     				
					div.appendChild(p);		
					
					var p = document.createElement('h3');
					p.setAttribute("id", 'crawlingURL')
					p.setAttribute("class", 'blink')
					p.innerHTML = currentURL    				
					div.appendChild(p);	
					
					let img = document.createElement('img');
					img.src ='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWJkNWVzYWNubngxZ2c3cGwwZmd3dmY4dWJ6NTM4enBjcXl1djRxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HN6GLlUsMvue652b2w/giphy.gif';
					img.setAttribute("id", 'thinkingIMG')
					document.getElementById('terminal').appendChild(img);
					
					var url = "https://api.allorigins.win/raw?url=" + 
					encodeURIComponent(urlToScrape) + "&callback=?";
			//HOMEPAGE
					$.get(url, function(response) {  
						console.log("page retrieved");
						var div = document.getElementById('terminal');
         				
         				var p = document.createElement('hr');
         				div.appendChild(p);
         				
         				var p = document.createElement('h1');
						p.innerHTML = urlToScrape     				
         				div.appendChild(p);
         				
         				var p = document.createElement('div');
						p.innerHTML = ""     				
         				div.appendChild(p);
         				
						const parser = new DOMParser();
						const html = parser.parseFromString(response, 'text/html');
						const workingHTML = html
						var p = document.createElement('p');
						workingHTML.querySelectorAll('script, style').forEach(s => s.remove());

						let htmlWithoutScripts = workingHTML.querySelector('body').innerText.trim();
         				p.textContent = htmlWithoutScripts
         				div.appendChild(p);
         				
         				var p = document.createElement('hr');
         				div.appendChild(p);
						
						var anchors = [], l = html.links;
							for(var i=0; i<l.length; i++) {
  							anchors.push(l[i].href);
						}
						
						function removeDuplicates(anchors) {
    						return anchors.filter((item,
       						index) => anchors.indexOf(item) === index);
						}
						
						
						var anchors2 = removeDuplicates(anchors)
						
						var i, len = anchors2.length;
						
												
							for( i = 0; i < len; i++ ) {
    							
    							
    							
    							
    							
										if (anchors2[i].includes(urlToScrape)) {
										
											console.log(anchors2[i]);
    										const domainSpecificUrls = anchors2[i]
    										
											currentURL = anchors2[i]
    							
    										document.getElementById("crawlingURL").remove();
    							
    										var div = document.getElementById('crawling');
											var p = document.createElement('h3');
											p.setAttribute("id", 'crawlingURL')
											p.setAttribute("class", 'blink')
											p.innerHTML = currentURL  				
											div.appendChild(p);	
											
											var urlAgain = "https://api.allorigins.win/raw?url=" + 
											encodeURIComponent(domainSpecificUrls) + "&callback=?";
											
											

											
											$.get(urlAgain, function(response2){
         										const parser = new DOMParser();
												const html = parser.parseFromString(response2, 'text/html');
																														
												const workingHTML = html
												var p = document.createElement('p');
												workingHTML.querySelectorAll('script, style').forEach(s => s.remove());
												
												let htmlWithoutScripts = workingHTML.querySelector('body').innerText.trim();
												
         										var div = document.getElementById('terminal');
												var p = document.createElement('h1');
												p.textContent = domainSpecificUrls
												div.appendChild(p);
															
												var p = document.createElement('div');
												p.innerHTML = ""     				
												div.appendChild(p);
						
												p.textContent = htmlWithoutScripts
												div.appendChild(p);
												document.getElementById("thinkingIMG").remove();
												document.getElementById("crawling").remove();
												document.getElementById("crawlingURL").remove();

												
											});	//subpage GET
										
										
										
										
										
										
													
										 // else if (!domainSpecificUrls.includes("http")) {
// 										
// 											if (!domainSpecificUrls.includes("///")) {
// 		    										urlToScrape = urlToScrape.replace(/\/$/, '');
// 		         									domainSpecificUrls = urlToScrape + domainSpecificUrls
// 		         									let img = document.createElement('img');
// 								img.src ='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Vpb21pems1eWpqbDU4ODA2bDN2YzdxcDNqd254bG81eWFnNzFneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/FnDyWPGGkg10TwiqCq/giphy.gif';
// 								img.setAttribute("id", 'thinkingIMG')
// 								document.getElementById('terminal').appendChild(img);
// 						
// 									var urlAgain = "https://api.allorigins.win/raw?url=" + 
// 									encodeURIComponent(domainSpecificUrls) + "&callback=?";
//          							$.get(urlAgain, function(response2) { 
//          							
// 										var div = document.getElementById('terminal');
// 										var p = document.createElement('h2');
// 										p.setAttribute("id", 'crawling')
// 										p.setAttribute("class", 'blink')
// 										p.innerHTML = "crawling"     				
// 										div.appendChild(p);
// 										var p = document.createElement('h1');
// 										p.textContent = domainSpecificUrls;
// 										div.appendChild(p);
// 										
// 										
// 										console.log(response2);
// 										var div = document.getElementById('terminal');
// 						
// 										var p = document.createElement('div');
// 										p.innerHTML = ""     				
// 										div.appendChild(p);
// 						
// 										const parser = new DOMParser();
// 										const html = parser.parseFromString(response2, 'text/html');
// 						
// 										const workingHTML = html
// 										var p = document.createElement('p');
// 										workingHTML.querySelectorAll('script, style').forEach(s => s.remove());
// 
// 										let htmlWithoutScripts = workingHTML.querySelector('body').innerText.trim();
// 										p.textContent = htmlWithoutScripts
// 										div.appendChild(p);
// 								document.getElementById("crawling").remove();
//          						document.getElementById("thinkingIMG").remove();
//          							});	//subpage GET
// 		         							}
// 		         						}
								}
         					}//loop through URLS
							
							
					});//hommepage GET
				}
			});//keypress
			

				
}	