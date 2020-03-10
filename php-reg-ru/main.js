var params = {
  "services": [
  {"domain_name":"test.ru"},
  {"service_id":"111111"}
  ]
};
var form = {
 input_format: "json",
 output_format: "json",
 io_encoding: "utf8",
 input_data: JSON.stringify(params),
 show_input_params: 0,
 username: "test",
 password: "test"
};
$.post("https://api.reg.ru/api/regru2/service/get_info", form, function (data, textStatus, jqXHR) {
 console.log("Status", textStatus);
 console.log("Headers", jqXHR.getAllResponseHeaders());
 console.log("Response received", data);
});
