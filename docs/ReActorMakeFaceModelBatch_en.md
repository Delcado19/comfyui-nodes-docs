
# Documentation
- Class name: ReActorMakeFaceModelBatch
- Category: 🌌 ReActor
- Output node: False

The ReActorMakeFaceModelBatch node is designed for batch processing of facial models within the ReActor framework. It can create or process multiple facial models simultaneously, simplifying workflows that require handling multiple facial models, such as batch face analysis, swapping, or restoration scenarios.

# Input types
## Required
- face_model1
    - The primary facial model required for processing. It serves as the initial input for the batch operation. Its existence is crucial because it sets the baseline by determining the starting point of the batch operation, thereby affecting the execution process.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor

## Optional
- face_model2
    - Optional additional facial model used for handling more complex or diverse batch operations. Including this model can increase the diversity of the batch process, influencing the node's execution by introducing variability in the models being processed.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model3
    - Optional additional facial model, allowing multiple models to be included in a single batch operation. This increases the complexity of the batch, potentially affecting the execution process as the node needs to handle a wider range of model features.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model4
    - Optional additional facial model, further extending the ability to perform batch operations with multiple models. This expansion may affect the node's execution by increasing the amount of data processed, thus impacting performance and results.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model5
    - Optional additional facial model, increasing the flexibility and scope of batch operations. Its inclusion may affect the node's execution by expanding the range of possible operations, allowing for more customized batch processing.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model6
    - Optional additional facial model, enhancing the ability to process more models in a batch. This may significantly affect the node's execution by expanding processing requirements and potential batch operation complexity.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model7
    - Optional additional facial model, allowing a wider range of models to be included in the batch operation. This may alter the node's execution by introducing more diversity in the models processed, potentially requiring different processing or handling strategies.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model8
    - Optional additional facial model, enabling batch processing to include models more broadly. This expands the node's operational scope, affecting its execution by potentially increasing the diversity of processing required for each model.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model9
    - Optional additional facial model, facilitating the inclusion of a wide range of models in a single batch. This inclusion may complicate the node's execution by adding more variables to the batch process, affecting how the batch is managed and executed.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor
- face_model10
    - Optional additional facial model, maximizing the ability to include numerous models in a batch operation. This maximization affects the node's execution by pushing the limits of what the node can handle in a single batch, impacting performance and operational complexity.
    - Comfy dtype: FACE_MODEL
    - Python dtype: torch.Tensor

# Output types
- FACE_MODELS
    - The output is the collection of facial models processed in the batch, which can be used or analyzed further in various scenarios.
    - Comfy dtype: FACE_MODEL
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
