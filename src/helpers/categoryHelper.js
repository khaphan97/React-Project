export default class CategoryHelper {
	static format(cateId) {
		switch (cateId) {
			case 1: {
				return "Đồng Hồ Nam";
			}
			case 2: {
				return "Đồng Hồ Nữ";
			}
			case 3: {
				return "Đồng Hồ Đôi";
			}
			default: {
				return;
			}
		}
	}
}
