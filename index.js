var sv1 = {
		maSV : 'Ph05906'
		Hoten : 'Nguyen Van A'
		lop: 'PT13312'
		ngay_nhap_hoc : moment('2017-7-29MM-DD');
		diemTB : 6;
		tinhHocLuc() : function () {
			if (this.diemTB < 5) {
				return "Hoc luc yeu";
			}else if(this.diemTB < 7){
				return "Hoc luc trung binh";
			}else if (this.diemTB <8) {
				return "Hoc luc kha";
			}else {
				return "hoc luc gioi";
			}
		}
		thoiGianRaTruong() : function() {
			var thoigiandahoc = moment().diff(this.ngay_nhap_hoc, 'month');
			return 28 - thoigiandahoc;
		}
	};

	var thoiGianRaTruong = 