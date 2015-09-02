/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#Code{LAB} | Coming Soon Template HTML5 BY afrussel
	@Author		   afrussel
	@Type          Javascript

	TABLE OF CONTENTS
	---------------------------
	
		01. Countdown

=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* */
/* ================================= */
/* ::::::::: 1. Countdown :::::::::: */
/* ================================= */
$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		17,
			'month': 	09,
			'year': 	2015,
			'hour': 	09,
			'min': 		00,
			'sec': 		0
		},
		omitWeeks: true
});