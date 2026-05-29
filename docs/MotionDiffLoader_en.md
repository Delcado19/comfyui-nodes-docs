
# Documentation
- Class name: MotionDiffLoader
- Category: MotionDiff
- Output node: False

The MotionDiffLoader node loads and initializes a Motion Diffusion Model (MDM) and its associated CLIP wrapper based on the specified model dataset. This node plays a crucial role in preparing motion generation models for subsequent processing or inference tasks, ensuring they are properly configured and include the necessary dataset information.

# Input types
## Required
- model_dataset
    - Specifies the dataset model to load. This selection determines the configuration of the motion diffusion model and its CLIP wrapper, which in turn affects the behavior and performance of motion generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- md_model
    - Returns a wrapped motion diffusion model instance that can be used for motion generation tasks.
    - Comfy dtype: MD_MODEL
    - Python dtype: MotionDiffModelWrapper
- md_clip
    - Returns a CLIP wrapper configured for the loaded motion diffusion model, used for text-conditioned motion generation.
    - Comfy dtype: MD_CLIP
    - Python dtype: MotionDiffCLIPWrapper


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MotionDiffLoader:
    @classmethod
    def INPUT_TYPES(s):
        global model_dataset_dict
        model_dataset_dict = get_model_dataset_dict()
        return {
            "required": {
                "model_dataset": (
                    list(model_dataset_dict.keys()), 
                    { "default": "-human_ml3d" }
                )
            },
        }

    RETURN_TYPES = ("MD_MODEL", "MD_CLIP")
    CATEGORY = "MotionDiff"
    FUNCTION = "load_mdm"

    def load_mdm(self, model_dataset):
        global model_dataset_dict
        if model_dataset_dict is None:
            model_dataset_dict = get_model_dataset_dict() #In case of API users
        model_config = model_dataset_dict[model_dataset]()
        mdm = create_mdm_model(model_config)
        return (MotionDiffModelWrapper(mdm, dataset=model_config.dataset), MotionDiffCLIPWrapper(mdm))

```
