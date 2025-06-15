
# Project ecommerce app folder architecture

	App1
       SignalStore
		  common.store.ts
		  comp1.store.ts
		  comp2.store.ts
		  .
		  .
		  .
		  compN.store.ts
	   Shared
		  component
		    component1
			component2
		  directive
			dir1.directive.ts
			dir2.directive.ts
		  pipe
			pipe1.pipe.ts
			pipe2.pipe.ts
		  service
			common.service.ts
			
		Module 
			//components which are directed towards performing one set of task will be grouped into one module. 
			//just look at your application and decide in how many logical group of tasks your application can be divided.
			//this way you can find out the modules your application can be divided into
      Admin
			  components
			  directive
			  pipe
			  service

			Cart
			  components
			  directive
			  pipe
			  service
			  
			LandingPage
			  components
			  directive
			  pipe
			  service
			  
			Login
			  components
			  directive
			  pipe
			  service
			  
			PlaceOrder
			  components
			  directive
			  pipe
			  service
			  
			ProductDetails
			  components
			  directive
			  pipe
			  service
			  
			ProductListing	
        components
			  directive
			  pipe
			  service			
	   
	App2
	   