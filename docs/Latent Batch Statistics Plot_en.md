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
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
