<script>
	import NavBar from "./components/NavBar.svelte"
	import Posts from "./components/Posts.svelte"
	import CreatePost from "./components/CreatePost.svelte"

	// variables
	import { diary } from "./stores/stores.js"

	try
	{
		if (localStorage.getItem("diary")){
			diary.local([...JSON.parse(localStorage.getItem("diary"))]);
		}	
	}
	catch(e){
		console.log(e)
	}

	$: localStorage.setItem("diary", JSON.stringify($diary));
</script>

<main>
	<NavBar />
	<div>	
		<CreatePost/>
		<Posts />
	</div>
</main>

<style>
	
	div
	{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

</style>