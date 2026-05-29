
# Documentation
- Class name: SplineEditor
- Category: KJNodes/experimental
- Output node: False

The SplineEditor node is a graphical editor designed for creating and manipulating spline curves, used to generate various types of output data. Through interactive editing features, it allows fine control over the shape and characteristics of spline curves. This node is particularly suitable for applications requiring custom scheduling, batch masks, or coordinate transformations.

# Input types
## Required
- points_store
    - Stores control point data for generating and manipulating spline curves.
    - Comfy dtype: STRING
    - Python dtype: str
- coordinates
    - String representation of control point coordinates, used to define the shape and trajectory of the spline curve.
    - Comfy dtype: STRING
    - Python dtype: str
- mask_width
    - Specifies the width of the mask to be generated, affecting the spatial resolution of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- mask_height
    - Defines the mask height, affecting the vertical resolution of the output mask.
    - Comfy dtype: INT
    - Python dtype: int
- points_to_sample
    - Sets the number of sample points generated from the spline curve, independent of the number of control points.
    - Comfy dtype: INT
    - Python dtype: int
- sampling_method
    - Selects the sampling method, which can be along the time axis (for scheduling) or along the path (for coordinates).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- interpolation
    - Specifies the interpolation method between control points, affecting the smoothness and shape of the spline curve.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tension
    - Adjusts the tension of the spline curve, affecting its curvature and adherence to control points.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repeat_output
    - Determines the number of times the output is repeated, used to generate multiple output data instances.
    - Comfy dtype: INT
    - Python dtype: int
- float_output_type
    - Decides the format of the float output, which can be a list, pandas series, or tensor format.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- min_value
    - Specifies the minimum value of the output, setting a lower bound for the generated data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_value
    - Defines the maximum value of the output, setting an upper bound for the generated data.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
    - Comfy dtype: MASK
    - Generates a batch of masks based on the defined spline curve, suitable for applications requiring mask input.
    - Python dtype: str
- coord_str
    - Comfy dtype: STRING
    - Provides a string representation of coordinates derived from the spline curve, used for text representation of paths or shapes.
    - Python dtype: str
- float
    - Comfy dtype: FLOAT
    - Outputs a list of floats, pandas series, or tensor (depending on the selected output type), representing values sampled from the spline curve.
    - Python dtype: float
- count
    - Comfy dtype: INT
    - Returns an integer count, possibly representing the number of elements in the output data.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SplineEditor:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "points_store": ("STRING", {"multiline": False}),
                "coordinates": ("STRING", {"multiline": False}),
                "mask_width": ("INT", {"default": 512, "min": 8, "max": 4096, "step": 8}),
                "mask_height": ("INT", {"default": 512, "min": 8, "max": 4096, "step": 8}),
                "points_to_sample": ("INT", {"default": 16, "min": 2, "max": 1000, "step": 1}),
                "sampling_method": (
                [   
                    'path',
                    'time',
                ],
                {
                    "default": 'time'
                }),
                "interpolation": (
                [   
                    'cardinal',
                    'monotone',
                    'basis',
                    'linear',
                    'step-before',
                    'step-after',
                    'polar',
                    'polar-reverse',
                ],
                {
                "default": 'cardinal'
                    }),
                "tension": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01}),
                "repeat_output": ("INT", {"default": 1, "min": 1, "max": 4096, "step": 1}),
                "float_output_type": (
                [   
                    'list',
                    'pandas series',
                    'tensor',
                ],
                {
                    "default": 'list'
                }),
            },
            "optional": {
                "min_value": ("FLOAT", {"default": 0.0, "min": -10000.0, "max": 10000.0, "step": 0.01}),
                "max_value": ("FLOAT", {"default": 1.0, "min": -10000.0, "max": 10000.0, "step": 0.01}),
            }
        }

    RETURN_TYPES = ("MASK", "STRING", "FLOAT", "INT")
    RETURN_NAMES = ("mask", "coord_str", "float", "count")
    FUNCTION = "splinedata"
    CATEGORY = "KJNodes/experimental"
    DESCRIPTION = """
# WORK IN PROGRESS  
Do not count on this as part of your workflow yet,  
probably contains lots of bugs and stability is not  
guaranteed!!  
  
## Graphical editor to create values for various   
## schedules and/or mask batches.  

**Shift + click** to add control point at end.
**Ctrl + click** to add control point (subdivide) between two points.  
**Right click on a point** to delete it.    
Note that you can't delete from start/end.  
  
Right click on canvas for context menu:  
These are purely visual options, doesn't affect the output:  
 - Toggle handles visibility
 - Display sample points: display the points to be returned.  

**points_to_sample** value sets the number of samples  
returned from the **drawn spline itself**, this is independent from the  
actual control points, so the interpolation type matters.  
sampling_method: 
 - time: samples along the time axis, used for schedules  
 - path: samples along the path itself, useful for coordinates  

output types:
 - mask batch  
        example compatible nodes: anything that takes masks  
 - list of floats
        example compatible nodes: IPAdapter weights  
 - pandas series
        example compatible nodes: anything that takes Fizz'  
        nodes Batch Value Schedule  
 - torch tensor  
        example compatible nodes: unknown
"""

    def splinedata(self, mask_width, mask_height, coordinates, float_output_type, interpolation, 
                   points_to_sample, sampling_method, points_store, tension, repeat_output, min_value=0.0, max_value=1.0):
        
        coordinates = json.loads(coordinates)
        for coord in coordinates:
            coord['x'] = int(round(coord['x']))
            coord['y'] = int(round(coord['y']))
            
        normalized_y_values = [
            (1.0 - (point['y'] / 512) - 0.0) * (max_value - min_value) + min_value
            for point in coordinates
        ]
        if float_output_type == 'list':
            out_floats = normalized_y_values * repeat_output
        elif float_output_type == 'pandas series':
            try:
                import pandas as pd
            except:
                raise Exception("MaskOrImageToWeight: pandas is not installed. Please install pandas to use this output_type")
            out_floats = pd.Series(normalized_y_values * repeat_output),
        elif float_output_type == 'tensor':
            out_floats = torch.tensor(normalized_y_values * repeat_output, dtype=torch.float32)
        # Create a color map for grayscale intensities
        color_map = lambda y: torch.full((mask_height, mask_width, 3), y, dtype=torch.float32)

        # Create image tensors for each normalized y value
        mask_tensors = [color_map(y) for y in normalized_y_values]
        masks_out = torch.stack(mask_tensors)
        masks_out = masks_out.repeat(repeat_output, 1, 1, 1)
        masks_out = masks_out.mean(dim=-1)
        return (masks_out, str(coordinates), out_floats, len(out_floats))

```
