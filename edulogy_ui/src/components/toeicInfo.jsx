import React from 'react';

const hcmLocations = [
    {
        name: 'Văn phòng IIG Việt Nam chi nhánh Hồ Chí Minh',
        address: 'Tầng 1, Tháp 1, Tòa nhà The Sun Avenue, Số 28 Mai Chí Thọ, P. An Phú, Q.2, TP. HCM'
    },
    {
        name: 'TT Ngoại ngữ ĐH Bách Khoa, TP HCM',
        address: 'Tòa nhà C6, TT Ngọai ngữ trường ĐH Bách Khoa HCM 268 Lý Thường Kiệt, Q.10, TP. HCM'
    },
    {
        name: 'Trung Tâm Anh Văn Hội Việt Mỹ (VUS)',
        address: 'Số 72 BIS Võ Thị Sáu, Quận 3, TP. HCM'
    },
    {
        name: 'Trung tâm Anh ngữ giao tiếp quốc tế Leecam',
        address: '104 Cao Thắng, Phường 4, Q.3, TP. HCM'
    },
    {
        name: 'ĐH Kinh tế Tp Hồ Chí Minh',
        address: '59C Nguyễn Đình Chiểu, Quận 3, TP. HCM'
    },
    {
        name: 'ĐH Ngân Hàng - STN 13818 A',
        address: '39 Hàm Nghi, Quận 1, TP. HCM'
    },
    {
        name: 'Đại học Khoa học Tự nhiên – ĐH Quốc gia TP HCM',
        address: 'Số 227 Nguyễn Văn Cừ, Quận 5, TP.HCM'
    },
];

const hnLocations = [
    {
        name: 'Văn phòng IIG Việt Nam 75 Giang Văn Minh (Chỉ tổ chức thi)',
        address: '75 Giang Văn Minh, Q. Ba Đình, Hà Nội'
    },
    {
        name: 'VP IIG Academy Hà Nội',
        address: 'Tầng 3 Trung Yên Plaza, Số 1 Trung Hòa, Cầu Giấy, Hà Nội'
    },
    {
        name: 'Trường Đại học Kinh tế Quốc dân',
        address: 'Số 207 đường Giải Phóng, Hai Bà Trưng, Hà Nội'
    },
];

const dnLocations = [
    {
        name: 'Văn phòng IIG Việt Nam chi nhánh Đà Nẵng',
        address: 'Số 266 đường Trần Phú, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam'
    },
];

function ToeicInfo() {
    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                <div className="toeic-info">
                    <h1 className="title">Thi TOEIC ở đâu? Hướng dẫn thủ tục đăng ký thi TOEIC (Cập nhật tháng 11/2020)</h1>

                    <div className="content">
                        <p className="opening">
                            Ngoài việc trang bị kiến thức tiếng Anh cho kỳ thi TOEIC thì việc hiểu rõ về quy định đăng ký thi TOEIC cũng hết sức quan trọng. Bài viết này cập nhật thông tin mới và chính xác nhất của năm 2020, hãy đọc để hiểu rõ toàn bộ "quy trình" thi TOEIC, từ thủ tục đăng ký thi đến các quy định khi vào phòng thi và khi làm bài thi, để giúp các bạn luyện thi TOEIC và chuẩn bị cho kì thi một cách suôn sẻ nhất nhé!
                        </p>

                        <div className="toeic-location">
                            <h2>1. Thi TOEIC ở đâu: Danh sách địa điểm thi và đăng ký thi TOEIC</h2>
                            <p>
                                Tại Việt Nam, bạn có thể đăng ký thi TOEIC tại các văn phòng của IIG, đơn vị được ETS (đơn vị gốc ra đề thi TOEIC) ủy quyền cho tổ chức thi và cấp chứng chỉ tại Việt Nam:
                            </p>
                            <ul className="registration-locations">
                                <li>
                                    <b>Văn phòng Hà Nội</b>
                                    <ul>
                                        <li>Tầng 3, Trung Yên Plaza, số 1 Trung Hòa, Cầu Giấy, Hà Nội</li>
                                        <li>Tel: (024) 3649 5999</li>
                                        <li>Email: info@iigvietnam.com</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Văn phòng Đà Nẵng</b>
                                        <ul>
                                            <li>Số 19 Hoàng Văn Thụ, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam</li>
                                            <li>Tel: (0236) 3565 888    Fax: (0236) 3565 154</li>
                                            <li>Email: danang@iigvietnam.com</li>
                                        </ul>
                                </li>
                                <li>
                                    <b>Văn phòng Tp. Hồ Chí Minh </b>
                                        <ul>
                                            <li>Tầng 1, Tháp 1, Tòa nhà The Sun Avenue, Số 28 Mai Chí Thọ, P. An Phú, Q.2, Tp. Hồ Chí Minh</li>
                                            <li>Tel: (028)3990 5888    Fax: (028)3990 5999</li>
                                            <li>saigon@iigvietnam.com</li>
                                        </ul>
                                </li>
                            </ul>
                            <p>Còn dưới đây là danh sách các địa điểm tổ chức thi TOEIC:</p>

                            <h3>Thi TOEIC ở đâu tại TP. Hồ Chí Minh?</h3>
                            <ol>
                                {hcmLocations.map((location, index) => {
                                    return (
                                        <li key={index}>
                                            <b>{location.name}</b><br/>
                                            <span>{location.address}</span>
                                        </li>
                                    );
                                })}
                            </ol>

                            <h3>Thi TOEIC ở đâu tại Hà Nội ?</h3>
                            <ol>
                                {hnLocations.map((location, index) => {
                                    return (
                                        <li key={index}>
                                            <b>{location.name}</b><br/>
                                            <span>{location.address}</span>
                                        </li>
                                    );
                                })}
                            </ol>

                            <h3>Thi TOEIC ở đâu tại Đà Nẵng ?</h3>
                            <ol>
                                {dnLocations.map((location, index) => {
                                    return (
                                        <li key={index}>
                                            <b>{location.name}</b><br/>
                                            <span>{location.address}</span>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>

                        <div className="toeic-procedures-process">
                            <h2>2. Thủ tục đăng ký thi TOEIC + Toàn bộ quá trình dự thi TOEIC</h2>
                            <img className="procedures-img" src="/img/dang_ky_va_du_thi.png" alt=""/>

                            <h3>Quy trình đăng ký dự thi online (Áp dụng cho các bạn thi tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng)</h3>
                            <p>
                                Từ ngày 10/09/2020, các bạn muốn thi tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng cần làm thủ tục đăng ký dự thi online trước khi đến hoàn thiện thủ tục tại các quầy đăng ký của IIG Việt Nam.
                            </p>
                            <p>Các bạn thực hiện đầy đủ các bước hướng dẫn như bên dưới nhé.</p>

                            <p>
                                <b>Bước 1</b>: Bạn truy cập trang <a href="https://online.iigvietnam.com/" target="_blank">Đăng ký dự thi online của IIG</a>
                                . Chọn “Đăng ký” tài khoản theo 1 trong 2 cách sau:
                            </p>
                            <ul>
                                <li>
                                    Cách 1: Bạn chọn “Đăng ký” và làm theo hướng dẫn trên trang để kích hoạt tài khoản đăng ký. Sau đó bạn tiến hành đăng nhập tài khoản trên trang.
                                </li>
                                <li>
                                    Cách 2: Bạn có thể đăng nhập tài khoản qua Google, nhập email và mật khẩu Google để truy cập.
                                </li>
                            </ul>
                            <p>
                                <b>Bước 2</b>: Sau khi đã đăng nhập thành công, đưa con trỏ chuột tới mục “Đăng ký thi” và lựa chọn bài thi muốn đăng ký dự thi. → Màn hình hiện trang “Thông tin đăng ký” → bạn điền các thông tin cá nhân theo form đăng ký.
                            </p>
                            <ul>
                                <li>
                                    Lưu ý rằng trong form, IIG sẽ yêu cầu bạn tải lên file ảnh chụp giấy tờ tùy thân (CMND, CCCD, Hộ chiếu), ảnh chụp thẻ 3x4 đúng tỷ lệ và ảnh chụp mặt trước thẻ HS, SV (nếu bạn đang là học sinh, sinh viên). Ảnh chụp cần đảm bảo cân đối, rõ nét và đúng định dạng file (.jpg).
                                </li>
                            </ul>
                            <p>
                                Sau khi hoàn thiện form, bạn tick vào ô “Tôi xin cam kết” và chọn “Đăng ký” để nộp hồ sơ → Màn hình hiển thị thông báo kết quả đăng ký “Chúc mừng thí sinh đã hoàn thành hồ sơ đăng ký dự thi”.
                            </p>
                            <p>
                                Ngoài ra, hệ thống cũng sẽ trả về email mà bạn đã đăng ký thi với kết quả đăng ký tương tự. Bạn có thể kiểm tra Email để xem các thông tin đăng ký dự thi.
                            </p>
                            <p>
                                <b>Bước 3</b>: Bạn tiến hành in phiếu dự thi. Bạn có thể in phiếu dự thi theo các cách sau:
                            </p>
                            <ol>
                                <li>
                                    In ngay sau khi hoàn thành việc đăng ký online.
                                </li>
                                <li>
                                    In phiếu dự thi sau qua email bằng cách click vào nút “In phiếu dự thi” trong nội dung email thông báo của IIG.
                                </li>
                                <li>
                                    In tại mục Lịch sử hồ sơ đăng ký dự thi. Bạn ấn vào Tên đăng nhập của mình trên website IIG → Chọn “Thành viên quản lý” → chọn “Lịch sử hồ sơ đăng ký dự thi” → click vào nút “In phiếu” → sau khi cửa sổ mới hiện ra, bạn chọn “In phiếu dự thi”.
                                </li>
                            </ol>
                            <p>
                                Sau khi hoàn thành 3 bước trên, bạn chuẩn bị đầy đủ giấy tờ hợp lệ và có mặt 15 phút trước khung giờ đã hẹn trong form đăng ký online tại quầy thủ tục của IIG để người phụ trách kiểm tra tính hợp lệ của các giấy tờ bạn được yêu cầu mang theo. Bạn xem chi tiết giấy tờ cần chuẩn bị <a href="#preparation">tại đây</a>.
                            </p>

                            <h3>Lệ phí thi TOEIC</h3>
                            <p>
                                <b>Lệ phí thi TOEIC tại IIG Việt Nam</b> (cập nhật mới nhất vào tháng 11/2020) sẽ phân chia theo từng đối tượng thi như sau:
                            </p>
                            <ul>
                                <li>Đối với người đi làm, lệ phí thi TOEIC là <b>1.390.000 VNĐ</b></li>
                                <li>Đối với học sinh, sinh viên, lệ phí thi TOEIC là <b>990.000 VNĐ</b></li>
                            </ul>

                            <h3 id="preparation">Cần chuẩn bị những gì trước khi đăng ký thi TOEIC?</h3>
                            <p>Các bạn phải tự đến đăng ký dự thi TOEIC, không thể nhờ bố mẹ hoặc bạn bè đăng ký hộ.</p>
                            <p><b>Khi làm thủ tục đăng ký thi TOEIC hoặc hoàn thiện hồ sơ đăng ký dự thi online thì bạn cần mang theo những giấy tờ sau:</b></p>
                            <ol>
                                <li>
                                    <b>Giấy Chứng Minh Nhân Dân (CMND) / thẻ Căn cước Công dân (CCCD) hoặc Hộ Chiếu (Passport)</b><br/>
                                    Lưu ý là giấy tờ phải còn nguyên hiện trạng, chưa từng bị cắt viền ép hay ép thêm lớp ép dẻo/ ép lụa, không rách/ mờ thông tin/ ảnh, không bong góc và dấu giáp lai vẫn còn rõ ràng. Nếu không bạn phải về làm lại CMND mới thì mới được đăng ký thi.<br/>
                                    Nếu muốn chắc ăn thì bạn có thể dùng hộ chiếu để đăng ký thi. TUY NHIÊN, nếu dùng hộ chiếu để đăng ký, thì khi đi thi cần mang cả CMND lẫn hộ chiếu để làm thủ tục vào phòng thi.<br/>
                                    Trong trường hợp bạn dùng thẻ CCCD, bạn cần mang theo cả CMND cũ hoặc sổ Hộ khẩu thể hiện số CMND cũ để làm thủ tục.
                                </li>
                                <li>
                                    <b>3 tấm ảnh 3x4</b> chụp không quá 3 tháng, mặt sau mỗi ảnh ghi rõ Họ tên, ngày sinh, số CMND / thẻ CCCD / Hộ Chiếu.<br/>
                                    Lưu ý bắt buộc phải là <b>ảnh 3x4 chuẩn quốc tế</b> (to hơn chuẩn Việt Nam và có nền trắng). Ảnh chụp có thời gian không quá 3 tháng. Ảnh không được can thiệp kỹ thuật số và giống với ảnh đã đăng tải khi đăng ký trực tuyến (đối với trường hợp bạn đăng ký thi online).
                                </li>
                                <li>
                                    <b>Phiếu đăng ký dự thi (liên 1 và liên 2) </b>bản in (dành cho những bạn đăng ký dự thi online) để mang đến địa điểm đăng ký hoàn thiện hồ sơ đăng ký dự thi.
                                </li>
                                <li>
                                    <b>Thẻ học sinh, sinh viên hệ chính quy </b>với các bạn đang là học sinh, sinh viên hệ chính quy. Không áp dụng cho học viên Cao học, nghiên cứu sinh, sinh viên các hệ không chính quy và người đi làm. Yêu cầu thông tin trên thẻ HS, SV phải rõ ràng thể hiện đủ thông tin, ảnh của thí sinh và có dấu của nhà trường: không có dấu hiệu tẩy xóa, thay thế hoặc chỉnh sửa các thông tin như: ảnh, sửa họ, tên đệm, tên, ngày sinh, lớp, niên khóa, hạn sử dụng,...
                                </li>
                            </ol>

                            <h3>Xem lịch thi TOEIC và chọn ngày thi như thế nào?</h3>
                            <p>
                                Về lịch thi TOEIC, các bạn nên liên hệ với đơn vị tổ chức thi sẽ có lịch thi cụ thể và chính xác nhất. Tốt nhất là bạn nên gọi điện hoặc đến trực tiếp trung tâm để có thể được báo về lịch thi TOEIC cập nhật mới nhất và đúng nhất.
                            </p>
                            <p>
                                Bạn có thể truy cập website www.iigvietnam.com để xem lịch thi tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng nếu muốn thi tại trung tâm IIG ở 3 thành phố này nhé.
                            </p>
                            <p>
                                Để đảm bảo thi được đúng ngày mình chọn, bạn nên đăng ký thi trước ngày dự tính thi ít nhất là 2 tuần nha, vì các địa điểm thi đều có rất nhiều thí sinh mới đăng ký mỗi ngày.
                            </p>

                            <h3>Bạn sẽ nhận được gì sau khi đăng ký thi?</h3>
                            <ol>
                                <li><b>Phiếu đăng ký</b> dự thi TOEIC</li>
                                <li>Cuốn <b>Hướng dẫn dự thi TOEIC</b></li>
                            </ol>

                            <h3>Chuyển thời gian thi/Hủy thi TOEIC</h3>
                            <p>
                                Quy định về <b>chuyển thời gian thi và hủy thi </b>thì khác nhau giữa các đơn vị tổ chức thi. Riêng đối với <b>IIG </b>thì:
                            </p>
                            <ul>
                                <li>Bạn chỉ được đổi lịch thi tối đa 01 lần.</li>
                                <li>Thời hạn chuyển đổi thời gian thi và hủy thi tối thiểu là 05 ngày làm việc trước ngày thi.</li>
                                <li>Lệ phí chuyển thời gian thi là 50% lệ phí thi.</li>
                                <li>Nếu bạn làm thủ tục hủy thi đúng hạn sẽ được hoàn trả 50% lệ phí thi.</li>
                                <li>Bạn có thể viết giấy ủy quyền theo mẫu và ủy quyền cho người khác đến làm thủ tục chuyển đổi/hủy ngày thi. Người được ủy quyền cần mang theo CMND của bạn và người được ủy quyền, giấy ủy quyền, giấy đăng ký dự thi để đến IIG làm thủ tục nhé.</li>
                            </ul>

                            <h3>Khi đi thi</h3>
                            <ul>
                                <li>
                                    Bạn cần mang theo:
                                    <ul>
                                        <li>Phiếu đăng ký dự thi TOEIC.</li>
                                        <li>CMND bản gốc nếu bạn đăng ký thi bằng CMND, hoặc cả CMND lẫn hộ chiếu nếu bạn dùng hộ chiếu để đăng ký thi.</li>
                                    </ul>
                                </li>
                                <li>Bạn <b>KHÔNG</b> được mang theo bất cứ vật dụng cá nhân nào như viết chì, viết máy, đồng hồ, nước uống, giấy nháp vào phòng thi. Địa điểm tổ chức thi sẽ phát viết chì và gôm tẩy cho từng thí sinh.</li>
                            </ul>

                            <h3>Khi làm bài thi + Answer Sheet TOEIC</h3>
                            <ul>
                                <li>
                                    Trong quá trình làm bài, bạn chọn đáp án bằng cách tô đậm vào các ô tròn trong khung Listening Section và Reading Section trong <b>Answer Sheet TOEIC - Phiếu trả lời</b>. Để chọn đáp án, bạn dùng viết chì để tô kín hoàn toàn vào vòng tròn A, B, C, D tương ứng.<br/>
                                    Mẫu Answer Sheet bạn có thể xem ở ngay dưới đây:<br/>
                                    <img className="answer-sheet-img" src="/img/answer_sheet_toeic.png" alt=""/><br/>
                                    Ngoài ra, bạn cũng có thể thấy trong hình trên có các khung đánh số 10, 11, 12. Các khung này liên quan đến thủ tục phòng thi và bạn sẽ được các giám thị hướng dẫn tô vào trước khi làm bài.
                                </li>
                                <li>
                                    Tuy nhiên, lưu ý là bạn <b>KHÔNG</b> được viết bất cứ thứ gì vào trong tập đề thi TOEIC, cho dù là dùng viết chì.
                                </li>
                                <li>
                                    Hãy lắng nghe cán bộ gác thi và luôn ghi nhớ những nội quy trong phòng thi, đừng để mắc những lỗi nhỏ nhặt như trên làm uổng phí công sức luyện thi TOEIC của mình bạn nhé!​
                                </li>
                            </ul>
                        </div>

                        <div className="toeic-outcome">
                            <h2>Nhận kết quả thi TOEIC & Giá trị của bằng TOEIC</h2>
                            <p>
                                <b>Thời gian nhận kết quả thi TOEIC</b> là 5 ngày làm việc sau ngày thi (Hà Nội) và 7 ngày làm việc sau ngày thi (Đà Nẵng và TP. HCM), nghĩa là khoảng 10 đến 12 ngày thông thường.
                            </p>
                            <p>
                                Bằng TOEIC có giá trị trong vòng <b> 02 năm kể từ ngày có kết quả</b>. Trong thời gian đó, bạn có thể dùng nó để bổ sung hồ sơ tìm việc hoặc thậm chí là đi du học (ở một số nước và một số trường nhất định).
                            </p>
                            <p>
                                Sau thời gian 2 năm, bằng TOEIC sẽ không còn hiệu lực. Lúc này bạn có thể thi một lần nữa để được cấp chứng chỉ mới, nếu cảm thấy cần thiết.
                            </p>
                        </div>

                        <p className="ending">
                            Như vậy là những băn khoăn của bạn về việc thi TOEIC ở đâu, đăng ký thi TOEIC như thế nào, và đến ngày thi cần làm gì đã được giải đáp ở trên rồi đúng không nào! Bây giờ bạn chỉ cần quan tâm đến việc luyện thi TOEIC thôi!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ToeicInfo;