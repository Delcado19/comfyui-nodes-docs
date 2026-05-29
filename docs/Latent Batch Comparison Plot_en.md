# Documentation
- Class name: LatentBatchComparator
- Category: test
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node aims to compare two batches of latent variables by generating a visual representation that shows the differences between them. It uses a cosine similarity matrix to quantify the differences between latent vectors, providing a clear and intuitive understanding of their relative positions in the latent space.

# Input types
## Required
- latent_batch_1
    - This parameter represents the first batch of latent variables to be compared. It plays a key role in the node's operation, as it forms one side of the comparison. The latent variables in this batch are expected to be structured in a way that allows for a meaningful comparison with the second batch.
    - Comfy dtype: "LATENT"
    - Python dtype: Dict[str, torch.Tensor]
- latent_batch_2
    - This parameter holds the second batch of latent variables to be compared against the first batch. Its importance is on par with the first batch, as it completes the comparison analysis. The structure and format of the latent variables in this batch should be compatible with those in the first batch for an accurate comparison.
    - Comfy dtype: "LATENT"
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- plot_image
    - The output of this node is an image representing the cosine similarity matrix between the two batches of latent variables. It serves as a visualization tool for understanding the degree of similarity or difference between the latent variables at a glance.
    - Comfy dtype: "IMAGE"
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LatentBatchComparator:
    """
    Generate plots showing the differences between two batches of latents.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latent_batch_1': ('LATENT',), 'latent_batch_2': ('LATENT',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('plot_image',)
    CATEGORY = 'test'
    FUNCTION = 'plot_latent_differences'

    def plot_latent_differences(self, latent_batch_1, latent_batch_2):
        """
        Generate a plot of the differences between two batches of latents.
        """
        import torch.nn.functional as F
        (tensor1, tensor2) = [x['samples'] for x in (latent_batch_1, latent_batch_2)]
        if tensor1.shape != tensor2.shape:
            raise ValueError('Latent batches must have the same shape: %s != %s' % (tensor1.shape, tensor2.shape))
        (B, C, H, W) = tensor1.shape
        tensor1_flat = tensor1.view(B, -1)
        tensor2_flat = tensor2.view(B, -1)
        tensor1_flat_expanded = tensor1_flat.unsqueeze(1)
        cosine_similarities_vectorized = F.cosine_similarity(tensor1_flat_expanded, tensor2_flat.unsqueeze(0), dim=2)
        plt.figure(figsize=(15, 10))
        plt.imshow(cosine_similarities_vectorized, cmap='viridis')
        plt.title('Cosine Similarity Matrix')
        plt.xlabel('Batch 1 Index')
        plt.ylabel('Batch 2 Index')
        plt.tight_layout()
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        pil_image = Image.open(buf)
        image_tensor = pil2tensor(pil_image)
        batch_output = image_tensor.unsqueeze(0)
        return batch_output
```