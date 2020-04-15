const modal = (get_info_photo) => {

var obj_photo = get_info_photo;

var left_photo_list = '';

for (let i = 0; i < 9; i++) {
let rand = Math.random().toFixed(0);

left_photo_list += `
<div class='block_photo'>
	<img src="${window.photosLists[rand].photo}" class="rounded" alt="...">
</div>
`;
}





var html = `
<div class='col-12 m-0'>
	<button onClick='closeModal()' style="background-color: #333131eb;height: 50px;width: 50px;opacity: 1;color: white;" type="button" class="mt-4 ml-3 rounded close float-left" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	</button>

	<div class="mt-4 mr-3 rounded col-3 bg-white float-right">
		<p class="h5 m-1">${obj_photo.author}</p>
	</div>
</div>


<div class="pt-5 p-0 m-0 col-12 row justify-content-center">

	<div class="col-2 text-center">		
		${left_photo_list}
		<input class="mt-5 btn btn-outline-light" type="submit" value="Полный список">
	</div>


	<div class="col-7">

		<div class='overflow-hidden h-75'>
			<img src='${obj_photo.photo}' class="img-cover rounded float-left" alt="...">
		</div>

		<div class="rounded text-center w-25 mr-3 mt-1 bg-white float-right">
			${obj_photo.rank}
		</div>
	</div>

	<div class="col-2 text-center">
		<div class="mb-2 h-50 bg-white rounded">
			<span>
				${obj_photo.description}
			</span>
		</div>

		<div>
			<select class="form-control form-control-sm">
				<option>${obj_photo.years}</option>
				<option>2007</option>
				<option>2014</option>
				<option>2018</option>
			</select>
		</div>


	</div>
</div>
`;

return html;

}