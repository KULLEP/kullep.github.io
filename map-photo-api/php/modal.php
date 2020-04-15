

<div class='col-12 m-0'>
	<button onClick='closeModal()' style="background-color: #333131eb;height: 50px;width: 50px;opacity: 1;color: white;" type="button" class="mt-4 ml-3 rounded close float-left" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	</button>

	<div class="mt-4 mr-3 rounded col-3 bg-white float-right">
		<p class="h5 m-1">Author</p>
	</div>
</div>


<div class="pt-5 p-0 m-0 col-12 row justify-content-center">

	<div class="col-3">		


		<!-- PHP -->
		<?  for($i = 0; $i < 10; $i++) { ?>
			<img src="http://balticplus.ru/wp-content/uploads/dom-sovetov-2.jpg" class="my-2 col-6 rounded float-left" alt="...">
		<? } ?>
		<!-- PHP -->

		<input class="" type="button" value="Полный список" />

	</div>


	<div class="col-7">
		<img src="http://balticplus.ru/wp-content/uploads/dom-sovetov-2.jpg" class="col-12 rounded float-left" alt="...">

		<div class="w-25 mr-3 mt-1 bg-white float-right">
			132
		</div>
	</div>

	<div class="col-2">
		<div class="mb-2 h-50 bg-white rounded">
			<span>
				Описание
			</span>
		</div>

		<div>
			<select class="form-control form-control-sm">
				<option>1996</option>
				<option>2007</option>
				<option>2014</option>
				<option>2018</option>
			</select>
		</div>


	</div>
</div>
