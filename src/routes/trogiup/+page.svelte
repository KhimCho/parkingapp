<script lang='ts'>
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-1 md:2/3 xl:w-1/2 mx-auto my-16 justify-center bg-black/10 rounded">
    <Accordion autocollapse>
        <AccordionItem>
            <svelte:fragment slot="summary">
                <p class="font-bold">Liệu có đảm bảo an toàn cho sinh viên?</p>
            </svelte:fragment>
            <svelte:fragment slot="content">
                Trả lời cho câu hỏi
                <br>Bảo vệ hoạt động 24/24.
                <br>Các thiết bị hiện tại được áp dụng tại đây.
                <br>Camera full HD sắc nét, bắt trọn từng nốt ruồi.
                <br>Các khu vực liên lạc thông qua thiết bị được phát triển bởi Uit.
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="summary">
                <p class="font-bold">Giá giữ xe có quá đắt không?</p>
            </svelte:fragment>
            <svelte:fragment slot="content">
                Trả lời cho câu hỏi
                <br>Một tháng chỉ vỏn vẹn 2 tô phở.
                <br>Trong một ngày có thể ra vào nhiều lần, vì vậy tiết kiệm hơn.
                <br>Gia hạn càng lâu thì giá càng dược giảm.
                <br>Còn có các ưu đãi giữ xe hàng tháng.
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="summary">
                <p class="font-bold">Sinh viên có thể giữ xe qua đêm không?</p>
            </svelte:fragment>
            <svelte:fragment slot="content">
                Trả lời cho câu hỏi
                <br>Hiện tại Uit vẫn chưa cung cấp dịch vụ này.
                <br>Có thể trong vài tháng tới sẽ mở rộng thêm.
                <br>Đối với các sinh viên về quê dài hạn, có thể đăng ký để xe tại đây.
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="summary">
                <p class="font-bold">Còn điều gì mà các sinh viên thường không chú ý?</p>
            </svelte:fragment>
            <svelte:fragment slot="content">
                Trả lời cho câu hỏi
                <br>Nhà xe Uit còn là nơi giữ hộ các đồ vật thất lạc.
                <br>Xung quanh nhà xe còn có các kệ chứa ô Uit vào những ngày trời mưa.
                <br>Các bác bảo vệ vui tính, chỉ dẫn tận tâm, ngoài ra còn rất tuân thủ quy định.
                <br>Các bác thông tin rất nhanh nên các sinh viên nếu bị mất xe hoặc chìa khóa thì nên hỏi các bác trước.
            </svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.8004791759775!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1701313890414!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<style>
      iframe {
      width: 100%; 
      height: 400px;
      border: none ; 
      border-radius: 5px; 
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
</style>