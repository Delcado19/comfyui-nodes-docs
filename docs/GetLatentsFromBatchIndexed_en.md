
# Documentation
- Class name: GetLatentsFromBatchIndexed
- Category: KJNodes
- Output node: False

The GetLatentsFromBatchIndexed node is designed to select and return specific latents from a given batch of latents. It facilitates extracting subsets of latents for further processing or analysis, and is an essential component for operations requiring targeted manipulation or inspection of the latent space.

# Input types
## Required
- latents
    - The latents parameter represents the batch of latents available for selection. It is critical for determining the range of latents available to choose from.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- indexes
    - The indexes parameter specifies the indices of the latents to select from the batch. It plays a key role in identifying which latents to extract and process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- latent
    - The output is a modified version of the input batch of latents, containing only the latents at the specified indices.
    - Comfy dtype: LATENT
    - Python dtype: Tuple[Dict[str, torch.Tensor]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class GetLatentsFromBatchIndexed:
    
    RETURN_TYPES = ("LATENT",)
    FUNCTION = "indexedlatentsfrombatch"
    CATEGORY = "KJNodes"
    DESCRIPTION = """
Selects and returns the latents at the specified indices as an latent batch.
"""

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                 "latents": ("LATENT",),
                 "indexes": ("STRING", {"default": "0, 1, 2", "multiline": True}),
        },
    } 
    
    def indexedlatentsfrombatch(self, latents, indexes):
        
        samples = latents.copy()
        latent_samples = samples["samples"] 

        # Parse the indexes string into a list of integers
        index_list = [int(index.strip()) for index in indexes.split(',')]
        
        # Convert list of indices to a PyTorch tensor
        indices_tensor = torch.tensor(index_list, dtype=torch.long)
        
        # Select the latents at the specified indices
        chosen_latents = latent_samples[indices_tensor]

        samples["samples"] = chosen_latents
        return (samples,)

```
