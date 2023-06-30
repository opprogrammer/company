<template>
	<div>
		<h1>Please Wait</h1>
	</div>
</template>
<script setup>
	const { Realm } = MyRealmApp();

	onMounted(() => {
		Realm.handleAuthRedirect();
	});
</script>