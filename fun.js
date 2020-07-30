$(document).ready(function(){
	var apikey="AIzaSyBF2caoen0UHn_NlmFT16fg2YBYXq004Xw";
	var video=''
	
	$("form").submit(function(event){
		event.preventDefault();
        
        var search=$("#search").val();


		videoSearch(apikey,search,10);
	})
	function videoSearch(key,search,maxResults){

		$("#videos").empty();
		$.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
			

			data.items.forEach(item=>{
				video=`
				<iframe width="400" height="550" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`

				$("#videos").append(video);
			})
		})
	}
})
    
    
