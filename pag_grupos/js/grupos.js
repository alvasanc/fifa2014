			if (document.getElementsByClassName) {				
				// ------------------- primer equipo -----------------------//
                var tagseq1	= document.getElementsByClassName ("eq1");
				var bandseq1	= document.getElementsByClassName ("baneq1");                                
                for (var i = 0; i < tagseq1.length; i++) {					
                    var eq1 = tagseq1[i];					
					eq1.innerHTML = nomeq1;                    
                }
				for (var i = 0; i < bandseq1.length; i++) {					
                    var ban1 = bandseq1[i];					
					ban1.src = bandera1;                    
                }
				// ------------------- segundo equipo -----------------------//
                var tagseq2	= document.getElementsByClassName ("eq2");   
				var bandseq2	= document.getElementsByClassName ("baneq2");  				
                for (var i = 0; i < tagseq2.length; i++) {					
                    var eq2 = tagseq2[i];					
					eq2.innerHTML = nomeq2;                    
                }
				for (var i = 0; i < bandseq2.length; i++) {					
                    var ban2 = bandseq2[i];					
					ban2.src = bandera2;                    
                }
				// ------------------- tercer equipo -----------------------//
                var tagseq3	= document.getElementsByClassName ("eq3");  
				var bandseq3	= document.getElementsByClassName ("baneq3");		
                for (var i = 0; i < tagseq3.length; i++) {					
                    var eq3 = tagseq3[i];					
					eq3.innerHTML = nomeq3;                    
                }
				for (var i = 0; i < bandseq3.length; i++) {					
                    var ban3 = bandseq3[i];					
					ban3.src = bandera3;                    
                }
				// ------------------- cuarto equipo -----------------------//
                var tagseq4	= document.getElementsByClassName ("eq4");  
				var bandseq4	= document.getElementsByClassName ("baneq4");		
                for (var i = 0; i < tagseq4.length; i++) {					
                    var eq4 = tagseq4[i];					
					eq4.innerHTML = nomeq4;                    
                }
				for (var i = 0; i < bandseq4.length; i++) {					
                    var ban4 = bandseq4[i];					
					ban4.src = bandera4;                    
                }
            }
            else {
                alert ("Your browser does not support the getElementsByClassName method.");
            }			
		