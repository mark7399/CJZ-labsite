# 广东工业大学 生物信息学与脑科学课题组

<div class="hero-section">
    <div class="hero-content">
        <div class="welcome-text">
            <p class="intro-text">欢迎来到陈佳洲课题组网站。我们专注于生物信息学、脑科学和机器学习的前沿交叉研究。</p>
        </div>
        
        <div class="network-visualization">
            <div class="neural-network">
                <div class="node node-1"></div>
                <div class="node node-2"></div>
                <div class="node node-3"></div>
                <div class="node node-4"></div>
                <div class="node node-5"></div>
                <div class="connection connection-1"></div>
                <div class="connection connection-2"></div>
                <div class="connection connection-3"></div>
                <div class="connection connection-4"></div>
            </div>
        </div>
    </div>
</div>

## 研究方向

<div class="research-section">
    <div class="research-content">
        <p class="research-intro">我们的核心研究是聚焦于图计算方法，深度挖掘生物网络中的关联与传播模式，旨在：</p>
        
        <div class="research-goals">
            <div class="goal-item">
                <div class="goal-icon">🎯</div>
                <div class="goal-text">提升复杂疾病诊断准确率</div>
            </div>
            
            <div class="goal-item">
                <div class="goal-icon">🔬</div>
                <div class="goal-text">挖掘疾病相关的早期筛查靶点</div>
            </div>
            
            <div class="goal-item">
                <div class="goal-icon">💊</div>
                <div class="goal-text">推动疾病的个性化精准治疗</div>
            </div>
        </div>
    </div>
</div>

<style>
/* Zaha Hadid 启发的流动布局 */
.hero-section {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    border-radius: 0 0 50% 50% / 0 0 20px 20px;
    padding: 60px 20px;
    margin: -20px -20px 40px -20px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.welcome-text {
    z-index: 2;
    position: relative;
}

.intro-text {
    font-size: 1.3em;
    line-height: 1.6;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    margin: 0;
}

/* Refik Anadol 启发的神经网络可视化 */
.network-visualization {
    position: relative;
    height: 300px;
    width: 100%;
}

.neural-network {
    position: relative;
    width: 100%;
    height: 100%;
}

.node {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #00ffff 0%, #0080ff 100%);
    border-radius: 50%;
    box-shadow: 0 0 20px #00ffff;
    animation: pulse 2s infinite ease-in-out;
}

.node-1 { top: 20%; left: 20%; animation-delay: 0s; }
.node-2 { top: 40%; left: 70%; animation-delay: 0.4s; }
.node-3 { top: 70%; left: 30%; animation-delay: 0.8s; }
.node-4 { top: 60%; left: 80%; animation-delay: 1.2s; }
.node-5 { top: 30%; left: 50%; animation-delay: 1.6s; }

.connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%);
    transform-origin: left center;
    animation: signal-flow 3s infinite linear;
}

.connection-1 {
    top: 22%;
    left: 21%;
    width: 200px;
    transform: rotate(15deg);
}

.connection-2 {
    top: 42%;
    left: 51%;
    width: 150px;
    transform: rotate(-30deg);
    animation-delay: 0.5s;
}

.connection-3 {
    top: 62%;
    left: 31%;
    width: 180px;
    transform: rotate(45deg);
    animation-delay: 1s;
}

.connection-4 {
    top: 32%;
    left: 51%;
    width: 120px;
    transform: rotate(-60deg);
    animation-delay: 1.5s;
}

@keyframes pulse {
    0%, 100% { 
        transform: scale(1);
        opacity: 1;
    }
    50% { 
        transform: scale(1.5);
        opacity: 0.7;
    }
}

@keyframes signal-flow {
    0% {
        background: linear-gradient(90deg, transparent 0%, transparent 100%);
    }
    50% {
        background: linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%);
    }
    100% {
        background: linear-gradient(90deg, transparent 0%, transparent 100%);
    }
}

/* 研究方向部分 */
.research-section {
    background: linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 20px;
    padding: 40px;
    margin: 40px 0;
    position: relative;
}

.research-section::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #007bff, #00ffff, #007bff);
    border-radius: 22px;
    z-index: -1;
}

.research-intro {
    font-size: 1.2em;
    line-height: 1.6;
    color: #2c3e50;
    margin-bottom: 30px;
    text-align: center;
}

.research-goals {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.goal-item {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.goal-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.2);
}

.goal-icon {
    font-size: 2em;
    margin-right: 15px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.goal-text {
    font-size: 1.1em;
    color: #2c3e50;
    font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .network-visualization {
        height: 200px;
    }
    
    .research-goals {
        grid-template-columns: 1fr;
    }
    
    .goal-item {
        flex-direction: column;
        text-align: center;
    }
    
    .goal-icon {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
</style>