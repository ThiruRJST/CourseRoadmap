import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Mathematical Foundations",
    duration: "6–8 weeks",
    color: "#00FFB2",
    icon: "∑",
    description: "The bedrock. No shortcuts here — every concept downstream depends on this.",
    sections: [
      {
        title: "Linear Algebra",
        items: [
          "Vectors, matrices, tensors — operations & intuition",
          "Eigenvalues, eigenvectors, SVD",
          "Matrix decompositions (LU, QR, Cholesky)",
          "Dot products, cross products, projections",
        ],
        resources: ["Gilbert Strang — MIT 18.06", "3Blue1Brown: Essence of Linear Algebra"],
      },
      {
        title: "Calculus & Optimization",
        items: [
          "Derivatives, partial derivatives, chain rule",
          "Gradient, Jacobian, Hessian matrices",
          "Gradient Descent (SGD, Adam, RMSProp)",
          "Lagrange multipliers & constrained optimization",
        ],
        resources: ["Khan Academy Multivariable Calculus", "Karpathy's micrograd walkthrough"],
      },
      {
        title: "Probability & Statistics",
        items: [
          "Probability distributions (Gaussian, Bernoulli, Categorical)",
          "Bayes' theorem, MLE, MAP estimation",
          "Information theory: entropy, KL divergence, cross-entropy",
          "Hypothesis testing, confidence intervals",
        ],
        resources: ["StatQuest (YouTube)", "Bishop — Pattern Recognition & ML (Ch. 1–2)"],
      },
    ],
  },
  {
    id: 2,
    title: "Python & ML Ecosystem",
    duration: "4–6 weeks",
    color: "#FFD700",
    icon: "⚙",
    description: "Build your toolbox. Learn to work fast with data before you model it.",
    sections: [
      {
        title: "Python Proficiency",
        items: [
          "NumPy: vectorized ops, broadcasting, memory layout",
          "Pandas: DataFrames, groupby, merges, time-series",
          "Matplotlib / Seaborn / Plotly for visualization",
          "Scikit-learn: pipelines, cross-validation, preprocessing",
        ],
        resources: ["fast.ai Practical ML", "Kaggle Learn tracks"],
      },
      {
        title: "Classical ML Algorithms",
        items: [
          "Linear/Logistic Regression from scratch",
          "Decision Trees, Random Forests, Gradient Boosting (XGBoost, LightGBM)",
          "SVM, KNN, Naive Bayes",
          "Clustering: K-Means, DBSCAN, Hierarchical",
          "Dimensionality Reduction: PCA, t-SNE, UMAP",
        ],
        resources: ["Hands-On ML (Géron)", "sklearn documentation deep dive"],
      },
      {
        title: "Data Engineering Basics",
        items: [
          "Dataset curation, cleaning, augmentation strategies",
          "Train/Val/Test splits, stratification, data leakage",
          "Feature engineering & selection",
          "Handling imbalanced datasets (SMOTE, class weights)",
        ],
        resources: ["Kaggle competitions", "Great Expectations for data validation"],
      },
    ],
  },
  {
    id: 3,
    title: "Deep Learning Core",
    duration: "8–10 weeks",
    color: "#FF6B6B",
    icon: "🧠",
    description: "Understand neural networks from neurons to backprop. Build everything by hand first.",
    sections: [
      {
        title: "Neural Network Fundamentals",
        items: [
          "Perceptron → MLP → Deep Networks",
          "Activation functions: ReLU, GELU, Sigmoid, Tanh, Swish",
          "Backpropagation: full manual derivation",
          "Weight initialization: Xavier, He, Kaiming",
          "Batch Norm, Layer Norm, Group Norm",
          "Dropout, L1/L2 regularization",
        ],
        resources: ["Karpathy — Neural Networks: Zero to Hero", "Deep Learning Book (Goodfellow)"],
      },
      {
        title: "PyTorch — Primary Framework",
        items: [
          "Tensor operations, autograd, computational graphs",
          "nn.Module, custom layers, forward() patterns",
          "DataLoader, Dataset, custom collate_fn",
          "Training loops: optimizer.step(), loss.backward()",
          "Checkpointing, model serialization (state_dict)",
          "torch.compile, mixed precision (AMP), gradient clipping",
        ],
        resources: ["Official PyTorch Tutorials", "PyTorch Lightning for boilerplate reduction"],
      },
      {
        title: "TensorFlow / Keras",
        items: [
          "Keras Sequential & Functional API",
          "Custom training loops with GradientTape",
          "tf.data pipelines for efficient data loading",
          "SavedModel format, TFLite, TF Serving",
          "When to use TF vs PyTorch (production vs research)",
        ],
        resources: ["TensorFlow official docs", "Keras documentation"],
      },
    ],
  },
  {
    id: 4,
    title: "Computer Vision",
    duration: "8–10 weeks",
    color: "#A855F7",
    icon: "👁",
    description: "Master visual perception — from pixel to prediction. Build detectors and segmenters from scratch.",
    sections: [
      {
        title: "CNN Architectures — Study & Implement",
        items: [
          "LeNet → AlexNet → VGG — understand depth's role",
          "ResNet: residual connections, skip connections — implement from scratch",
          "Inception, DenseNet, EfficientNet",
          "MobileNet, ShuffleNet — lightweight architectures",
          "Vision Transformers (ViT) — patch embeddings, attention in images",
          "ConvNeXt — modern CNN revisited",
        ],
        resources: ["Papers With Code", "torchvision source code", "Kaiming He's original ResNet paper"],
      },
      {
        title: "Object Detection — From Scratch",
        items: [
          "Anchor boxes, IoU, NMS — implement manually",
          "R-CNN → Fast R-CNN → Faster R-CNN (RPN, ROI Pooling)",
          "YOLO v1 from scratch: grid-based detection, loss function",
          "YOLOv5/v8: modern training pipeline & transfer learning",
          "DETR: Detection Transformer — end-to-end object detection",
          "Evaluation metrics: mAP@0.5, mAP@0.5:0.95, precision-recall curves",
        ],
        resources: ["Original YOLO paper", "Ultralytics docs", "DETR GitHub + paper"],
      },
      {
        title: "Segmentation — From Scratch",
        items: [
          "Semantic segmentation: FCN, U-Net (build from scratch)",
          "Instance segmentation: Mask R-CNN — ROI Align, mask head",
          "Panoptic segmentation: combining semantic + instance",
          "Segment Anything Model (SAM) — architecture & prompting",
          "Loss functions: Dice loss, BCE, Focal loss, IoU loss",
          "Evaluation: mIoU, Dice coefficient, pixel accuracy",
        ],
        resources: ["U-Net paper", "Detectron2 by Meta", "SAM paper & GitHub"],
      },
      {
        title: "Advanced CV Topics",
        items: [
          "Data augmentation: Albumentations, mosaic, mixup, cutmix",
          "Transfer learning & fine-tuning strategies",
          "Keypoint detection, pose estimation (OpenPose, ViTPose)",
          "Optical flow, video understanding (SlowFast, VideoMAE)",
          "Depth estimation, 3D vision basics",
        ],
        resources: ["Albumentations docs", "MMDetection framework", "timm (PyTorch Image Models)"],
      },
    ],
  },
  {
    id: 5,
    title: "NLP & Transformers",
    duration: "8–10 weeks",
    color: "#38BDF8",
    icon: "📝",
    description: "From word embeddings to the Transformer architecture that powers modern LLMs.",
    sections: [
      {
        title: "NLP Foundations",
        items: [
          "Tokenization: BPE, WordPiece, SentencePiece — implement BPE from scratch",
          "Word embeddings: Word2Vec, GloVe — train from scratch",
          "RNN, LSTM, GRU — sequence modeling, vanishing gradients",
          "Seq2Seq with attention (Bahdanau) — neural machine translation",
          "Text classification, NER, POS tagging",
        ],
        resources: ["Jurafsky & Martin — Speech & Language Processing (free online)", "CS224N Stanford"],
      },
      {
        title: "Transformer Architecture — From Scratch",
        items: [
          "Self-attention: Q, K, V matrices — build manually",
          "Multi-head attention: parallel attention heads",
          "Positional encodings: sinusoidal & RoPE",
          "Encoder-decoder vs decoder-only architectures",
          "Layer norm placement: Pre-LN vs Post-LN",
          "Feed-forward sublayer, residual connections",
          "Build a GPT-2 style model from scratch in PyTorch",
        ],
        resources: ["Attention Is All You Need (paper)", "Karpathy — nanoGPT", "The Illustrated Transformer (Alammar)"],
      },
      {
        title: "Hugging Face Ecosystem",
        items: [
          "transformers library: AutoModel, AutoTokenizer, pipelines",
          "Datasets library: loading, streaming, mapping",
          "PEFT: LoRA, QLoRA, prefix tuning",
          "Fine-tuning BERT, RoBERTa for classification tasks",
          "Fine-tuning LLaMA, Mistral with SFT",
          "Evaluate library, BLEU, ROUGE, BERTScore",
        ],
        resources: ["HuggingFace Course (free)", "PEFT documentation"],
      },
    ],
  },
  {
    id: 6,
    title: "Training LLMs",
    duration: "10–12 weeks",
    color: "#F97316",
    icon: "⚡",
    description: "The deep end. Pre-training, alignment, and scaling — everything needed to build production LLMs.",
    sections: [
      {
        title: "Pre-training at Scale",
        items: [
          "Data collection & cleaning: Common Crawl, C4, The Pile",
          "Deduplication, quality filtering, toxic content removal",
          "Tokenizer training at scale (SentencePiece/tiktoken)",
          "Scaling laws (Chinchilla): compute-optimal training",
          "Learning rate schedules: warmup + cosine decay",
          "Gradient accumulation, mixed precision (BF16/FP16)",
          "Loss monitoring, training stability, loss spikes debugging",
        ],
        resources: ["Chinchilla paper", "GPT-3 paper", "LLaMA 2 technical report"],
      },
      {
        title: "Distributed Training",
        items: [
          "Data Parallelism: DDP (DistributedDataParallel)",
          "Model Parallelism: tensor parallelism, pipeline parallelism",
          "ZeRO (Stage 1/2/3) — memory optimization",
          "DeepSpeed + Megatron-LM — production frameworks",
          "FSDP (Fully Sharded Data Parallel) in PyTorch",
          "Gradient checkpointing for memory reduction",
          "Multi-node training setup, NCCL, InfiniBand",
        ],
        resources: ["DeepSpeed docs", "Megatron-LM GitHub", "PyTorch FSDP tutorial"],
      },
      {
        title: "Alignment & Fine-tuning",
        items: [
          "Supervised Fine-Tuning (SFT) on instruction datasets",
          "RLHF: reward model training, PPO algorithm",
          "DPO (Direct Preference Optimization) — simpler alternative to RLHF",
          "LoRA / QLoRA: efficient fine-tuning under memory constraints",
          "Constitutional AI, RLAIF concepts",
          "Evaluation: MT-Bench, MMLU, HumanEval, custom benchmarks",
        ],
        resources: ["InstructGPT paper", "DPO paper", "TRL library by HuggingFace"],
      },
      {
        title: "Inference Optimization",
        items: [
          "KV Cache: mechanism & memory tradeoffs",
          "Quantization: INT8, INT4, GPTQ, AWQ, FP8",
          "Speculative decoding, batched inference",
          "FlashAttention v1/v2 — memory-efficient attention",
          "vLLM: PagedAttention, continuous batching",
          "ONNX export, TensorRT optimization",
        ],
        resources: ["vLLM documentation", "FlashAttention paper", "GPTQ paper"],
      },
    ],
  },
  {
    id: 7,
    title: "MLOps & Production Deployment",
    duration: "6–8 weeks",
    color: "#10B981",
    icon: "🚀",
    description: "Models only matter when deployed. Learn to serve millions of requests reliably and at scale.",
    sections: [
      {
        title: "Experiment Tracking & Reproducibility",
        items: [
          "MLflow: experiment tracking, model registry, artifacts",
          "Weights & Biases (W&B): sweeps, dashboards, lineage",
          "DVC: data versioning, pipeline tracking with Git",
          "Hydra / OmegaConf for config management",
          "Reproducible environments: Docker, conda, pyproject.toml",
        ],
        resources: ["MLflow docs", "W&B tutorials", "DVC documentation"],
      },
      {
        title: "Model Serving",
        items: [
          "REST APIs with FastAPI — build a model inference server",
          "TorchServe, TF Serving, Triton Inference Server",
          "gRPC vs REST tradeoffs for high-throughput serving",
          "Batching strategies: dynamic batching, micro-batching",
          "Model versioning & A/B testing in production",
          "Async inference with Celery + Redis",
        ],
        resources: ["FastAPI docs", "NVIDIA Triton documentation", "BentoML"],
      },
      {
        title: "Containerization & Orchestration",
        items: [
          "Docker: multi-stage builds, GPU passthrough (nvidia-docker)",
          "Kubernetes: pods, deployments, services, HPA",
          "Helm charts for ML workloads",
          "GPU node pools, resource limits, tolerations",
          "KServe / Seldon Core for model serving on K8s",
        ],
        resources: ["Kubernetes official docs", "KServe documentation"],
      },
      {
        title: "Scaling & Monitoring",
        items: [
          "Horizontal scaling, load balancing (NGINX, Envoy)",
          "Model monitoring: data drift, concept drift detection",
          "Latency SLOs, p50/p95/p99 percentiles with Prometheus + Grafana",
          "Logging structured traces with OpenTelemetry",
          "Auto-scaling GPU instances on AWS/GCP/Azure",
          "CI/CD for ML: GitHub Actions, automated retraining pipelines",
        ],
        resources: ["Evidently AI for drift detection", "Prometheus + Grafana stack", "Seldon Deploy"],
      },
    ],
  },
  {
    id: 8,
    title: "Capstone Projects",
    duration: "Ongoing",
    color: "#EC4899",
    icon: "🏆",
    description: "Prove mastery by building real things. These projects should live on your GitHub.",
    sections: [
      {
        title: "Build These End-to-End",
        items: [
          "Train GPT-2 (124M) from scratch on custom text corpus",
          "Build YOLOv1 from scratch — train on COCO subset",
          "U-Net for medical image segmentation (BraTS/ISIC dataset)",
          "Fine-tune LLaMA-3 with QLoRA + DPO on custom chat data",
          "Deploy a model API with Triton, autoscaled on Kubernetes",
          "Multimodal model: combine ViT encoder + GPT decoder for image captioning",
        ],
        resources: [],
      },
      {
        title: "Competitions & Community",
        items: [
          "Kaggle: join active CV and NLP competitions",
          "Papers With Code: reproduce 1 SOTA paper per month",
          "arXiv daily reading habit (cs.CV, cs.LG, cs.CL)",
          "Contribute to open-source (HuggingFace, PyTorch, Detectron2)",
          "Write technical blog posts explaining what you built",
        ],
        resources: [],
      },
    ],
  },
];

const techStack = [
  { category: "Training", tools: ["PyTorch", "DeepSpeed", "Megatron-LM", "FSDP", "PyTorch Lightning"] },
  { category: "Vision", tools: ["torchvision", "Detectron2", "MMDetection", "Albumentations", "timm"] },
  { category: "NLP/LLM", tools: ["HuggingFace", "TRL", "PEFT", "vLLM", "LitGPT"] },
  { category: "MLOps", tools: ["MLflow", "W&B", "DVC", "Docker", "Kubernetes"] },
  { category: "Serving", tools: ["FastAPI", "Triton", "TorchServe", "BentoML", "KServe"] },
  { category: "Monitoring", tools: ["Prometheus", "Grafana", "Evidently", "OpenTelemetry"] },
];

export default function AIRoadmap() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const totalWeeks = "~52–64";

  return (
    <div style={{
      background: "#080C10",
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: "#C8D6E5",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a2535",
        padding: "48px 32px 40px",
        background: "linear-gradient(180deg, #0D1B2A 0%, #080C10 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,255,178,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ color: "#00FFB2", fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>Complete Learning Path</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #00FFB2 0%, transparent 100%)" }} />
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 900,
            letterSpacing: -1,
            lineHeight: 1,
            margin: "0 0 16px",
            fontFamily: "'Courier New', monospace",
          }}>
            <span style={{ color: "#FFFFFF" }}>AI MASTERY</span><br />
            <span style={{ color: "#00FFB2" }}>ROADMAP</span>
          </h1>
          <p style={{ fontSize: 14, color: "#5A7A99", maxWidth: 600, lineHeight: 1.7, margin: "0 0 32px" }}>
            From mathematical foundations to deploying LLMs at scale. Train object detectors, segmentation models, and large language models from scratch.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Total Duration", value: `${totalWeeks} weeks` },
              { label: "Phases", value: "8" },
              { label: "Outcome", value: "Production-Ready ML Engineer" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 11, color: "#3D5A73", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{stat.label}</div>
                <div style={{ fontSize: 15, color: "#00FFB2", fontWeight: 700 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px" }}>

        {/* Tech Stack Banner */}
        <div style={{
          background: "#0D1B2A",
          border: "1px solid #1a2535",
          borderRadius: 4,
          padding: "20px 24px",
          marginBottom: 40,
        }}>
          <div style={{ fontSize: 10, color: "#3D5A73", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Full Technology Stack You'll Master</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {techStack.map(cat => (
              <div key={cat.category} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, color: "#3D5A73", textTransform: "uppercase", letterSpacing: 1, minWidth: "fit-content" }}>{cat.category}:</span>
                {cat.tools.map(tool => (
                  <span key={tool} style={{
                    fontSize: 11,
                    background: "#131F2E",
                    border: "1px solid #1E3248",
                    padding: "3px 8px",
                    borderRadius: 2,
                    color: "#8BB8D4",
                  }}>{tool}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {phases.map((phase, idx) => {
            const isOpen = activePhase === phase.id;
            return (
              <div key={phase.id} style={{
                border: `1px solid ${isOpen ? phase.color + "33" : "#1a2535"}`,
                borderRadius: 4,
                overflow: "hidden",
                transition: "border-color 0.2s",
                background: isOpen ? "#0A1520" : "transparent",
              }}>
                {/* Phase Header */}
                <div
                  onClick={() => {
                    setActivePhase(isOpen ? null : phase.id);
                    setActiveSection(null);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 24px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <div style={{
                    width: 40, height: 40,
                    background: phase.color + "15",
                    border: `1px solid ${phase.color}40`,
                    borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}>{phase.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 3 }}>
                      <span style={{ fontSize: 10, color: phase.color, letterSpacing: 2, textTransform: "uppercase" }}>Phase {String(idx + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 10, color: "#3D5A73" }}>·</span>
                      <span style={{ fontSize: 10, color: "#3D5A73", letterSpacing: 1 }}>{phase.duration}</span>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: -0.3 }}>{phase.title}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "#3D5A73", marginRight: 8, display: "none" }}>{phase.sections.length} sections</div>
                  <div style={{
                    width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
                    color: phase.color, fontSize: 16, transition: "transform 0.2s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}>+</div>
                </div>

                {/* Phase Body */}
                {isOpen && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <p style={{ fontSize: 13, color: "#5A7A99", marginBottom: 20, lineHeight: 1.6 }}>{phase.description}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
                      {phase.sections.map((section, si) => {
                        const sKey = `${phase.id}-${si}`;
                        const secOpen = activeSection === sKey;
                        return (
                          <div key={si} style={{
                            background: "#0D1B2A",
                            border: `1px solid ${secOpen ? phase.color + "40" : "#1a2535"}`,
                            borderRadius: 4,
                            overflow: "hidden",
                          }}>
                            <div
                              onClick={() => setActiveSection(secOpen ? null : sKey)}
                              style={{
                                padding: "14px 16px",
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF", marginBottom: 2 }}>{section.title}</div>
                                <div style={{ fontSize: 10, color: "#3D5A73" }}>{section.items.length} topics</div>
                              </div>
                              <div style={{
                                fontSize: 14, color: phase.color,
                                transition: "transform 0.2s",
                                transform: secOpen ? "rotate(45deg)" : "rotate(0deg)",
                              }}>+</div>
                            </div>
                            {secOpen && (
                              <div style={{ padding: "0 16px 16px" }}>
                                <div style={{ borderTop: `1px solid #1a2535`, paddingTop: 12, marginBottom: 12 }}>
                                  {section.items.map((item, ii) => (
                                    <div key={ii} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                                      <div style={{
                                        width: 4, height: 4,
                                        background: phase.color,
                                        borderRadius: "50%",
                                        marginTop: 6,
                                        flexShrink: 0,
                                      }} />
                                      <span style={{ fontSize: 12, color: "#8BB8D4", lineHeight: 1.6 }}>{item}</span>
                                    </div>
                                  ))}
                                </div>
                                {section.resources.length > 0 && (
                                  <div>
                                    <div style={{ fontSize: 9, color: "#3D5A73", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Resources</div>
                                    {section.resources.map((res, ri) => (
                                      <div key={ri} style={{ fontSize: 11, color: phase.color, opacity: 0.7, marginBottom: 4 }}>→ {res}</div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 48,
          padding: "24px",
          border: "1px solid #1a2535",
          borderRadius: 4,
          background: "#0D1B2A",
        }}>
          <div style={{ fontSize: 10, color: "#3D5A73", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Key Principles for Success</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { label: "Build From Scratch First", desc: "Implement every major architecture manually before using libraries. Understanding backprop > copying nn.Linear." },
              { label: "Read Papers Early", desc: "Start reading original papers from Phase 3. Start with ResNet, Attention Is All You Need, then YOLO." },
              { label: "GPU Access", desc: "Get a GPU early. Rent on vast.ai or RunPod if you don't own one. Local training = faster feedback loops." },
              { label: "Ship Public Projects", desc: "Every capstone project should be public on GitHub with a proper README. Your portfolio is your credential." },
            ].map(tip => (
              <div key={tip.label}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#00FFB2", marginBottom: 6 }}>{tip.label}</div>
                <div style={{ fontSize: 11, color: "#5A7A99", lineHeight: 1.7 }}>{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
