
# Documentation
- Class name: BboxVisualize
- Category: KJNodes/masking
- Output node: False

The BboxVisualize node overlays bounding boxes onto images, enhancing visual analysis by clearly marking regions of interest with specified line width and color.

# Input types
## Required
- images
    - A batch of images to draw bounding boxes on. These images serve as the canvas for the visualization process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- bboxes
    - A list of bounding box coordinates specifying the regions to highlight on the images. These coordinates play a crucial role in determining the precise areas to visualize.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- line_width
    - Specifies the line thickness used to draw the bounding boxes, affecting the visibility and prominence of the highlighted regions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The modified image batch with drawn bounding boxes, ready for visual inspection or further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BboxVisualize:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "bboxes": ("BBOX",),
                "line_width": ("INT", {"default": 1,"min": 1, "max": 10, "step": 1}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)
    FUNCTION = "visualizebbox"
    DESCRIPTION = """
Visualizes the specified bbox on the image.
"""

    CATEGORY = "KJNodes/masking"

    def visualizebbox(self, bboxes, images, line_width):
        image_list = []
        for image, bbox in zip(images, bboxes):
            x_min, y_min, width, height = bbox
            image = image.permute(2, 0, 1)

            img_with_bbox = image.clone()
            
            # Define the color for the bbox, e.g., red
            color = torch.tensor([1, 0, 0], dtype=torch.float32)
            
            # Draw lines for each side of the bbox with the specified line width
            for lw in range(line_width):
                # Top horizontal line
                img_with_bbox[:, y_min + lw, x_min:x_min + width] = color[:, None]
                
                # Bottom horizontal line
                img_with_bbox[:, y_min + height - lw, x_min:x_min + width] = color[:, None]
                
                # Left vertical line
                img_with_bbox[:, y_min:y_min + height, x_min + lw] = color[:, None]
                
                # Right vertical line
                img_with_bbox[:, y_min:y_min + height, x_min + width - lw] = color[:, None]
        
            img_with_bbox = img_with_bbox.permute(1, 2, 0).unsqueeze(0)
            image_list.append(img_with_bbox)

        return (torch.cat(image_list, dim=0),)

```
