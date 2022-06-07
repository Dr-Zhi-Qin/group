
function getLastModifiedDate(){
	var d = new Date(document.lastModified),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	var date = [month, day, year].join('-');
	document.write("<i>last update: " + date +"</i>");
}


document.getElementById("myFooter").innerHTML =
	"<footer class='site-footer'>"
	+"<div class='wrapper'>"
	+"<div class='footer-col-wrapper'>"
	+"<div class='footer-col'>"
	+"<ul class='contact-list'>"
	+"<li>"
	+"Bo Zhao"
	+"</li>"
	+"<li><a href='https://www.sdu.edu.cn/'"
	+"target='_blank'>Optics and Thermal Radiation Research Center</a></li>"
	+"<li>Institute of Frontier and Interdisciplinary Science</li>"
	+"<li>Shandong University</li>"
	+"<li>Office: 315, Building K1</li>"
	+"<li>Email: z.qin@sdu.edu.cn</li>"
	+"</ul>"
	+"</div>"
	+"<div class='footer-col'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='footer-text'>Website support: Chris Cai & academic.bio</div>"
	+"</footer>";
