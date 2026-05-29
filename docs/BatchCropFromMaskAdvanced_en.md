# Documentation
- Class name: BatchCropFromMaskAdvanced
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The 'crop' method of the BatchCropFromMaskAdvanced node is designed to intelligently crop images based on provided masks. It calculates the bounding box for each mask, smooths the bounding box size and center, then crops the image and mask to a uniform size while maintaining the integrity of the masked region. This node is particularly useful when preparing images for further processing and consistent image dimensions are required.

# Input types
## Required
- original_images
    - The original_images parameter is a key input containing the raw image data to be processed by the node. It is essential to the node's execution as it directly affects the cropping operation and the final output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks parameter defines the regions of interest in the image to be preserved during cropping. It plays a crucial role in ensuring important parts of the image are not lost during cropping.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- crop_size_mult
    - The crop_size_mult parameter is used to adjust the size of the cropped image. This is an optional input allowing the user to control the ratio of the final crop size to the original image dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_smooth_alpha
    - The bbox_smooth_alpha parameter controls the smoothness of bounding box size between consecutive images. It provides a way to maintain consistent sizes across different crops, which may be important for certain types of image analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- original_images
    - The original_images output contains the raw image data provided as input to the node. It serves as a reference for the user to compare the effects before and after the cropping operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_images
    - The cropped_images output consists of images cropped according to the masks and specified parameters. These are the primary result of the node's operation, ready for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_masks
    - The cropped_masks output includes masks corresponding to the cropped images. It ensures the regions of interest identified by the masks are preserved in the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- combined_crop_image
    - The combined_crop_image output is a combination of all input cropped images. It can be used for visualization purposes, quickly assessing the consistency and quality of cropping across different images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- combined_crop_masks
    - The combined_crop_masks output represents the combined masks of all cropped images. This output may be useful for applications requiring further analysis of masked regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output provides bounding box coordinates for each individual cropped image. This information may be important for applications requiring precise localization of regions within the image.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- combined_bounding_box
    - The combined_bounding_box output provides the bounding box of the combined cropped image. It is useful when a single bounding box is needed to encapsulate all cropped regions for further processing or analysis.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- bbox_width
    - The bbox_width output represents the bounding box width of the combined cropped image. It is a measure of the horizontal extent of the cropped region and can be used for size calculations.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height output represents the bounding box height of the combined cropped image. It is a measure of the vertical extent of the cropped region and can be used for size calculations.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: GPU

# Source code
```
class BatchCropFromMaskAdvanced:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'original_images': ('IMAGE',), 'masks': ('MASK',), 'crop_size_mult': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'bbox_smooth_alpha': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE', 'MASK', 'IMAGE', 'MASK', 'BBOX', 'BBOX', 'INT', 'INT')
    RETURN_NAMES = ('original_images', 'cropped_images', 'cropped_masks', 'combined_crop_image', 'combined_crop_masks', 'bboxes', 'combined_bounding_box', 'bbox_width', 'bbox_height')
    FUNCTION = 'crop'
    CATEGORY = 'KJNodes/masking'

    def smooth_bbox_size(self, prev_bbox_size, curr_bbox_size, alpha):
        return round(alpha * curr_bbox_size + (1 - alpha) * prev_bbox_size)

    def smooth_center(self, prev_center, curr_center, alpha=0.5):
        return (round(alpha * curr_center[0] + (1 - alpha) * prev_center[0]), round(alpha * curr_center[1] + (1 - alpha) * prev_center[1]))

    def crop(self, masks, original_images, crop_size_mult, bbox_smooth_alpha):
        bounding_boxes = []
        combined_bounding_box = []
        cropped_images = []
        cropped_masks = []
        cropped_masks_out = []
        combined_crop_out = []
        combined_cropped_images = []
        combined_cropped_masks = []

        def calculate_bbox(mask):
            non_zero_indices = np.nonzero(np.array(mask))
            (min_x, max_x, min_y, max_y) = (0, 0, 0, 0)
            if len(non_zero_indices[1]) > 0 and len(non_zero_indices[0]) > 0:
                (min_x, max_x) = (np.min(non_zero_indices[1]), np.max(non_zero_indices[1]))
                (min_y, max_y) = (np.min(non_zero_indices[0]), np.max(non_zero_indices[0]))
            width = max_x - min_x
            height = max_y - min_y
            bbox_size = max(width, height)
            return (min_x, max_x, min_y, max_y, bbox_size)
        combined_mask = torch.max(masks, dim=0)[0]
        _mask = tensor2pil(combined_mask)[0]
        (new_min_x, new_max_x, new_min_y, new_max_y, combined_bbox_size) = calculate_bbox(_mask)
        center_x = (new_min_x + new_max_x) / 2
        center_y = (new_min_y + new_max_y) / 2
        half_box_size = round(combined_bbox_size // 2)
        new_min_x = max(0, round(center_x - half_box_size))
        new_max_x = min(original_images[0].shape[1], round(center_x + half_box_size))
        new_min_y = max(0, round(center_y - half_box_size))
        new_max_y = min(original_images[0].shape[0], round(center_y + half_box_size))
        combined_bounding_box.append((new_min_x, new_min_y, new_max_x - new_min_x, new_max_y - new_min_y))
        self.max_bbox_size = 0
        curr_max_bbox_size = max((calculate_bbox(tensor2pil(mask)[0])[-1] for mask in masks))
        self.max_bbox_size = self.smooth_bbox_size(self.max_bbox_size, curr_max_bbox_size, bbox_smooth_alpha)
        self.max_bbox_size = round(self.max_bbox_size * crop_size_mult)
        self.max_bbox_size = math.ceil(self.max_bbox_size / 16) * 16
        if self.max_bbox_size > original_images[0].shape[0] or self.max_bbox_size > original_images[0].shape[1]:
            self.max_bbox_size = math.floor(min(original_images[0].shape[0], original_images[0].shape[1]) / 2) * 2
        for (i, (mask, img)) in enumerate(zip(masks, original_images)):
            _mask = tensor2pil(mask)[0]
            non_zero_indices = np.nonzero(np.array(_mask))
            if len(non_zero_indices[0]) > 0 and len(non_zero_indices[1]) > 0:
                (min_x, max_x) = (np.min(non_zero_indices[1]), np.max(non_zero_indices[1]))
                (min_y, max_y) = (np.min(non_zero_indices[0]), np.max(non_zero_indices[0]))
                center_x = np.mean(non_zero_indices[1])
                center_y = np.mean(non_zero_indices[0])
                curr_center = (round(center_x), round(center_y))
                if not hasattr(self, 'prev_center'):
                    self.prev_center = curr_center
                if i > 0:
                    center = self.smooth_center(self.prev_center, curr_center, bbox_smooth_alpha)
                else:
                    center = curr_center
                self.prev_center = center
                half_box_size = self.max_bbox_size // 2
                min_x = max(0, center[0] - half_box_size)
                max_x = min(img.shape[1], center[0] + half_box_size)
                min_y = max(0, center[1] - half_box_size)
                max_y = min(img.shape[0], center[1] + half_box_size)
                bounding_boxes.append((min_x, min_y, max_x - min_x, max_y - min_y))
                cropped_img = img[min_y:max_y, min_x:max_x, :]
                cropped_mask = mask[min_y:max_y, min_x:max_x]
                new_size = max(cropped_img.shape[0], cropped_img.shape[1])
                resize_transform = Resize(new_size, interpolation=InterpolationMode.NEAREST, max_size=max(img.shape[0], img.shape[1]))
                resized_mask = resize_transform(cropped_mask.unsqueeze(0).unsqueeze(0)).squeeze(0).squeeze(0)
                resized_img = resize_transform(cropped_img.permute(2, 0, 1))
                crop_transform = CenterCrop((min(self.max_bbox_size, resized_img.shape[1]), min(self.max_bbox_size, resized_img.shape[2])))
                cropped_resized_img = crop_transform(resized_img)
                cropped_images.append(cropped_resized_img.permute(1, 2, 0))
                cropped_resized_mask = crop_transform(resized_mask)
                cropped_masks.append(cropped_resized_mask)
                combined_cropped_img = original_images[i][new_min_y:new_max_y, new_min_x:new_max_x, :]
                combined_cropped_images.append(combined_cropped_img)
                combined_cropped_mask = masks[i][new_min_y:new_max_y, new_min_x:new_max_x]
                combined_cropped_masks.append(combined_cropped_mask)
            else:
                bounding_boxes.append((0, 0, img.shape[1], img.shape[0]))
                cropped_images.append(img)
                cropped_masks.append(mask)
                combined_cropped_images.append(img)
                combined_cropped_masks.append(mask)
        cropped_out = torch.stack(cropped_images, dim=0)
        combined_crop_out = torch.stack(combined_cropped_images, dim=0)
        cropped_masks_out = torch.stack(cropped_masks, dim=0)
        combined_crop_mask_out = torch.stack(combined_cropped_masks, dim=0)
        return (original_images, cropped_out, cropped_masks_out, combined_crop_out, combined_crop_mask_out, bounding_boxes, combined_bounding_box, self.max_bbox_size, self.max_bbox_size)
```