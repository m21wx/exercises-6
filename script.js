
		
		/* 

			 قسم شاشات اللمس
				 touchcancel عند مقاطعة حدث اللمس
				 touchend  الحدث عندما يقوم المستخدم بإزالة إصبعه من أحد العناصر 
				 touchmove الحدث عندما يقوم المستخدم بتحريك إصبعه عبر الشاشة 
				 touchstart الحدث عندما يلمس المستخدم عنصرًا ما 
			غير مدعومه 
				onshow عندما يتم عرض عنصر <menu> كقائمة سياق.
		*/
		let container = document.querySelector('.container');
		
		
		
		
		
		
			container.addEventListener('touchmove',f)
		
		
		
		
	function f(ev){
		
		let x = ev.touches[0].pageX;
		let y = ev.touches[0].pageY;
			let i = document.createElement('i');
			 i.style.left = x +'px';
			 i.style.top = y+'px';
			 i.className='i';
		
			 container.appendChild(i);
			setInterval(()=>{
				i.remove()
			},1000)		
		

		
	}
		container.addEventListener('mousemove',(e)=>{
			let i = document.createElement('i');
			 i.style.left = e.pageX +'px';
			 i.style.top = e.pageY +'px';
			 i.className='i';
			
			 container.appendChild(i);
			setInterval(()=>{
				i.remove()
			},1000)
			
			
			
		})
		
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		