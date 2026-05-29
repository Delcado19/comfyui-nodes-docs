# Documentation
- Class name: LatentBatchStatisticsPlot
- Category: tests
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

The LatentBatchStatisticsPlot node aims to analyze the statistical properties of a batch of latent variables. It performs comprehensive statistical analysis to determine the normality of each latent variable in the batch. The node generates a visual representation of the statistical results, providing insights into the distribution characteristics of the latent variables. This is particularly useful for researchers and data scientists who need graphical analysis tools to understand underlying data patterns.

# Input types
## Required
- batch
    - The 'batch' parameter is crucial for the node's operation, as it represents the collection of latent variables to be analyzed. This is a key input that directly affects the statistical analysis and the generated chart. This parameter ensures that the node receives the correct data to perform its intended function.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- plot_image
    - The 'plot_image' output is a graphical representation of the statistical analysis performed by the node. It includes the p-values, mean, and standard deviation of the latent variables in the chart, providing a visual summary of the data distribution. This output is very important because it allows users to quickly grasp the statistical properties of the latent batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class LatentBatchStatisticsPlot:
    """
    Generate a plot of the statistics of a batch of latents for analysis.
    Outputs an image.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'batch': ('LATENT',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('plot_image',)
    FUNCTION = 'statistics'
    CATEGORY = 'tests'

    @torch.no_grad()
    def statistics(self, batch):
        """
        Run a statistical test on each latent in a batch to see how
        close to normal each latent is.
        """
        from scipy import stats
        batch = batch['samples']
        batch_size = batch.shape[0]
        p_values = []
        means = []
        std_devs = []
        for i in trange(batch.shape[0]):
            tensor_1d = batch[i].flatten()
            numpy_array = tensor_1d.numpy()
            (_, p) = stats.shapiro(numpy_array)
            p_values.append(p)
            means.append(numpy_array.mean())
            std_devs.append(numpy_array.std())
        (fig, axs) = plt.subplots(3, 1, figsize=(10, 15))
        axs[0].plot(p_values, label='p-values', marker='o', linestyle='-')
        axs[0].set_title('Shapiro-Wilk Test P-Values')
        axs[0].set_xlabel('Batch Number')
        axs[0].set_ylabel('P-Value')
        axs[0].axhline(y=0.05, color='r', linestyle='--', label='Normal Threshold')
        axs[0].legend()
        axs[1].plot(means, marker='o', linestyle='-')
        axs[1].set_title('Mean of Each Batch Latent')
        axs[1].set_xlabel('Batch Number')
        axs[1].set_ylabel('Mean')
        axs[2].plot(std_devs, marker='o', linestyle='-')
        axs[2].set_title('Standard Deviation of Each Batch Latent')
        axs[2].set_xlabel('Batch Number')
        axs[2].set_ylabel('Standard Deviation')
        plt.tight_layout()
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        pil_image = Image.open(buf)
        image_tensor = pil2tensor(pil_image)
        batch_output = image_tensor.unsqueeze(0)
        return batch_output
```