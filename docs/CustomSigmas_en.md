
# Documentation
- Class name: CustomSigmas
- Category: KJNodes/noise
- Output node: False

The CustomSigmas node converts a list of floating-point numbers into a sigma tensor, facilitating manipulation and application of these values in noise-related operations within neural network models.

# Input types
## Required
- sigmas_string
    - This parameter represents a comma-separated string of sigma values used to convert into a sigma tensor. It is critical for defining the specific sigma values to be used in subsequent operations, directly affecting the behavior and results of noise application.
    - Comfy dtype: STRING
    - Python dtype: str
- interpolate_to_steps
    - Specifies the number of steps to which the sigma values should be interpolated. This parameter is important for adjusting the length of the sigma tensor to match the number of steps required in model processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- SIGMAS
    - The output is a sigma tensor derived from the input list of floating-point numbers. This tensor is essential for noise operations and application processes in neural network models.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CustomSigmas:
    @classmethod
    def INPUT_TYPES(s):
        return {"required":
                    {
                     "sigmas_string" :("STRING", {"default": "14.615, 6.475, 3.861, 2.697, 1.886, 1.396, 0.963, 0.652, 0.399, 0.152, 0.029","multiline": True}),
                     "interpolate_to_steps": ("INT", {"default": 10,"min": 0, "max": 255, "step": 1}),
                     }
                }
    RETURN_TYPES = ("SIGMAS",)
    RETURN_NAMES = ("SIGMAS",)
    CATEGORY = "KJNodes/noise"
    FUNCTION = "customsigmas"
    DESCRIPTION = """
Creates a sigmas tensor from a string of comma separated values.  
Examples: 
   
Nvidia's optimized AYS 10 step schedule for SD 1.5:  
14.615, 6.475, 3.861, 2.697, 1.886, 1.396, 0.963, 0.652, 0.399, 0.152, 0.029  
SDXL:   
14.615, 6.315, 3.771, 2.181, 1.342, 0.862, 0.555, 0.380, 0.234, 0.113, 0.029  
SVD:  
700.00, 54.5, 15.886, 7.977, 4.248, 1.789, 0.981, 0.403, 0.173, 0.034, 0.002  
"""
    def customsigmas(self, sigmas_string, interpolate_to_steps):
        sigmas_list = sigmas_string.split(', ')
        sigmas_float_list = [float(sigma) for sigma in sigmas_list]
        sigmas_tensor = torch.tensor(sigmas_float_list)
        if len(sigmas_tensor) != interpolate_to_steps:
            sigmas_tensor = self.loglinear_interp(sigmas_tensor, interpolate_to_steps)
        return (sigmas_tensor,)
     
    def loglinear_interp(self, t_steps, num_steps):
        """
        Performs log-linear interpolation of a given array of decreasing numbers.
        """
        t_steps_np = t_steps.numpy()

        xs = np.linspace(0, 1, len(t_steps_np))
        ys = np.log(t_steps_np[::-1])
        
        new_xs = np.linspace(0, 1, num_steps)
        new_ys = np.interp(new_xs, xs, ys)
        
        interped_ys = np.exp(new_ys)[::-1].copy()
        interped_ys_tensor = torch.tensor(interped_ys)
        return interped_ys_tensor

```
