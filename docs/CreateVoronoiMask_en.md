# Documentation
- Class name: CreateVoronoiMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The method 'createvoronoi' generates a Voronoi mask, a geometric pattern useful for various image processing tasks. It leverages the randomness of Voronoi diagrams to create unique and complex patterns, adjustable by point count, line width, and transition speed between start and end points.

# Input types
## Required
- frames
    - Parameter 'frames' determines the number of frames generated in the Voronoi mask sequence. It is essential for defining the length of the output animation or pattern.
    - Comfy dtype: INT
    - Python dtype: int
- num_points
    - Parameter 'num_points' specifies the number of points used to create the Voronoi diagram. It directly affects the complexity and detail of the generated mask.
    - Comfy dtype: INT
    - Python dtype: int
- line_width
    - Parameter 'line_width' controls the thickness of lines in the Voronoi mask. It is a key factor in the visibility and prominence of pattern features.
    - Comfy dtype: INT
    - Python dtype: int
- speed
    - Parameter 'speed' determines the rate at which points transition from the start position to the end position. It influences dynamic motion in the mask sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_width
    - Parameter 'frame_width' sets the width of each frame in the mask sequence. It is crucial for defining the output aspect ratio and overall size.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - Parameter 'frame_height' determines the height of each frame in the mask sequence. It works with 'frame_width' to define the overall shape of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - Output parameter 'mask' represents the generated Voronoi mask as a tensor. It is a binary image with the mask pattern encoded, ready for further processing or application.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor
- mask_inverted
    - Output parameter 'mask_inverted' provides an inverted version of the generated Voronoi mask. This is useful for creating complementary patterns or effects in image processing.
    - Comfy dtype: TORCH.TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CreateVoronoiMask:
    RETURN_TYPES = ('MASK', 'MASK')
    RETURN_NAMES = ('mask', 'mask_inverted')
    FUNCTION = 'createvoronoi'
    CATEGORY = 'KJNodes/masking/generate'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'frames': ('INT', {'default': 16, 'min': 2, 'max': 4096, 'step': 1}), 'num_points': ('INT', {'default': 15, 'min': 1, 'max': 4096, 'step': 1}), 'line_width': ('INT', {'default': 4, 'min': 1, 'max': 4096, 'step': 1}), 'speed': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'frame_width': ('INT', {'default': 512, 'min': 16, 'max': 4096, 'step': 1}), 'frame_height': ('INT', {'default': 512, 'min': 16, 'max': 4096, 'step': 1})}}

    def createvoronoi(self, frames, num_points, line_width, speed, frame_width, frame_height):
        from scipy.spatial import Voronoi
        batch_size = frames
        out = []
        aspect_ratio = frame_width / frame_height
        start_points = np.random.rand(num_points, 2)
        start_points[:, 0] *= aspect_ratio
        end_points = np.random.rand(num_points, 2)
        end_points[:, 0] *= aspect_ratio
        for i in range(batch_size):
            t = i * speed / (batch_size - 1)
            t = np.clip(t, 0, 1)
            points = (1 - t) * start_points + t * end_points
            points[:, 0] *= aspect_ratio
            vor = Voronoi(points)
            (fig, ax) = plt.subplots()
            plt.subplots_adjust(left=0, right=1, bottom=0, top=1)
            ax.set_xlim([0, aspect_ratio])
            ax.set_ylim([0, 1])
            ax.axis('off')
            ax.margins(0, 0)
            fig.set_size_inches(aspect_ratio * frame_height / 100, frame_height / 100)
            ax.fill_between([0, 1], [0, 1], color='white')
            for simplex in vor.ridge_vertices:
                simplex = np.asarray(simplex)
                if np.all(simplex >= 0):
                    plt.plot(vor.vertices[simplex, 0], vor.vertices[simplex, 1], 'k-', linewidth=line_width)
            fig.canvas.draw()
            img = np.array(fig.canvas.renderer._renderer)
            plt.close(fig)
            pil_img = Image.fromarray(img).convert('L')
            mask = torch.tensor(np.array(pil_img)) / 255.0
            out.append(mask)
        return (torch.stack(out, dim=0), 1.0 - torch.stack(out, dim=0))
```