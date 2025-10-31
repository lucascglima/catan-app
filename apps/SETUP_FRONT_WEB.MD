# Catan MVP - Setup e Configuração Front-End

## 📋 Informações do Projeto

**Nome:** @catan-mvp/web  
**Versão:** 1.0.0  
**Framework:** Next.js 15.1.3  
**React:** 19.0.0  
**TypeScript:** 5.7.2  
**Estilização:** Tailwind CSS 4.0.0

---

## 🎯 Princípios de Design e Desenvolvimento

### Filosofia do Projeto
1. **UX/UI em Primeiro Lugar**: Cada componente deve priorizar clareza e intuitividade
2. **Fidelidade às Regras**: Sistema deve prevenir ações inválidas
3. **Feedback Visual Imediato**: Toda ação gera resposta visual instantânea
4. **Performance**: Otimizar renderizações e animações

### Stack Tecnológica Escolhida

#### Core
- **Next.js 15**: Framework React com SSR e App Router
- **React 19**: Biblioteca UI com novos recursos de concorrência
- **TypeScript**: Type safety em todo o código

#### UI/UX
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **Radix UI**: Componentes acessíveis e sem estilo
  - Dialog (Modais)
  - Dropdown Menu (Menus contextuais)
  - Tooltip (Dicas visuais)
  - Avatar (Indicadores de jogadores)

#### State Management & Real-time
- **Socket.io Client**: Comunicação real-time para multiplayer
- **Supabase**: Backend as a Service (autenticação e banco de dados)

#### Validação e Utilities
- **Zod**: Schema validation
- **clsx + tailwind-merge**: Gerenciamento dinâmico de classes CSS

#### Workspace
- **@catan-mvp/types**: Tipos compartilhados
- **@catan-mvp/game-engine**: Lógica do jogo

---

## 🗂️ Estrutura de Pastas Recomendada

```
apps/web/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (game)/
│   │   ├── lobby/
│   │   └── game/
│   │       ├── [gameId]/
│   │       │   └── page.tsx
│   │       └── layout.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                      # Componentes base (Radix UI wrappers)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── tooltip.tsx
│   │   └── avatar.tsx
│   ├── game/
│   │   ├── board/
│   │   │   ├── GameBoard.tsx
│   │   │   ├── Hexagon.tsx
│   │   │   ├── Port.tsx
│   │   │   ├── Robber.tsx
│   │   │   ├── Road.tsx
│   │   │   ├── Settlement.tsx
│   │   │   └── City.tsx
│   │   ├── player/
│   │   │   ├── PlayerPanel.tsx
│   │   │   ├── ResourceCards.tsx
│   │   │   ├── DevelopmentCards.tsx
│   │   │   └── PlayerActions.tsx
│   │   ├── dice/
│   │   │   ├── DiceRoller.tsx
│   │   │   └── DiceAnimation.tsx
│   │   ├── trading/
│   │   │   └── BankTradeModal.tsx
│   │   ├── construction/
│   │   │   ├── ConstructionMenu.tsx
│   │   │   └── BuildingPlacement.tsx
│   │   └── opponents/
│   │       └── OpponentCard.tsx
│   └── shared/
│       ├── LoadingSpinner.tsx
│       └── Toast.tsx
├── hooks/
│   ├── useGame.ts
│   ├── useSocket.ts
│   ├── usePlayer.ts
│   ├── useConstruction.ts
│   └── useTrading.ts
├── lib/
│   ├── socket.ts
│   ├── supabase.ts
│   ├── utils.ts
│   └── constants.ts
├── types/
│   ├── game.ts
│   └── player.ts
├── public/
│   ├── images/
│   │   ├── resources/
│   │   │   ├── wood.svg
│   │   │   ├── brick.svg
│   │   │   ├── sheep.svg
│   │   │   ├── wheat.svg
│   │   │   └── ore.svg
│   │   ├── hexagons/
│   │   │   ├── forest.svg
│   │   │   ├── hills.svg
│   │   │   ├── pasture.svg
│   │   │   ├── fields.svg
│   │   │   ├── mountains.svg
│   │   │   └── desert.svg
│   │   └── dice/
│   │       ├── dice-1.svg
│   │       └── ...
│   └── sounds/
│       ├── dice-roll.mp3
│       └── resource-gain.mp3
├── styles/
│   └── animations.css
└── tailwind.config.ts
```

---

## 🎨 Sistema de Design

### Cores do Tema

```typescript
// tailwind.config.ts
const colors = {
  // Recursos
  resource: {
    wood: '#8B4513',
    brick: '#CD5C5C',
    sheep: '#98FB98',
    wheat: '#F0E68C',
    ore: '#708090',
  },
  
  // Jogadores (4 cores padrão)
  player: {
    red: '#FF4444',
    blue: '#4169E1',
    white: '#FFFFFF',
    orange: '#FF8C00',
  },
  
  // UI
  ui: {
    background: '#1A1A2E',
    surface: '#16213E',
    primary: '#0F3460',
    accent: '#E94560',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#5A5A5A',
    },
  },
  
  // Estados
  state: {
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    info: '#2196F3',
  },
  
  // Números de probabilidade
  probability: {
    high: '#FF0000', // 6 e 8
    medium: '#000000', // Outros
  },
};
```

### Tipografia

```typescript
// Hierarquia de texto
const typography = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  body: 'text-base',
  small: 'text-sm',
  tiny: 'text-xs',
};
```

### Espaçamento

```typescript
// Sistema de espaçamento (múltiplos de 4px)
const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
};
```

---

## 🎮 Componentes Principais

### 1. GameBoard Component

**Responsabilidades:**
- Renderizar hexágonos de recursos
- Exibir números de produção (6 e 8 em vermelho)
- Mostrar portos
- Renderizar estradas, povoações e cidades
- Gerenciar posicionamento do ladrão

**Props:**
```typescript
interface GameBoardProps {
  hexagons: Hexagon[];
  roads: Road[];
  settlements: Settlement[];
  cities: City[];
  robberPosition: HexPosition;
  onHexClick?: (hex: Hexagon) => void;
  buildMode?: 'road' | 'settlement' | 'city' | null;
  validPositions?: Position[];
}
```

**Estados Visuais:**
- Normal: Hexágonos estáticos
- Produção: Brilho/pulso nos hexágonos que produzem
- Modo Construção: Destaque de posições válidas
- Modo Ladrão: Hexágonos clicáveis para mover ladrão

---

### 2. DiceRoller Component

**Responsabilidades:**
- Botão de rolar dados
- Animação de rolagem (1-2s)
- Exibir resultado

**Props:**
```typescript
interface DiceRollerProps {
  onRoll: () => Promise<[number, number]>;
  disabled: boolean;
  isRolling: boolean;
}
```

**Animação:**
```css
@keyframes dice-roll {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}
```

---

### 3. PlayerPanel Component

**Responsabilidades:**
- Exibir cartas de recursos (agrupadas por tipo)
- Exibir cartas de desenvolvimento
- Mostrar pontos de vitória
- Ações disponíveis (construir, trocar, passar vez)

**Layout:**
```
┌─────────────────────────────────────────────┐
│  Pontos: 5  |  ⚔️ Cavaleiros: 2             │
├─────────────────────────────────────────────┤
│  RECURSOS                                   │
│  🪵 3  🧱 2  🐑 4  🌾 1  ⛰️ 0              │
├─────────────────────────────────────────────┤
│  CARTAS DE DESENVOLVIMENTO (3)              │
│  [Cavaleiro] [Progresso] [???]              │
├─────────────────────────────────────────────┤
│  AÇÕES                                      │
│  [🎲 Rolar] [🔄 Trocar] [🏗️ Construir]    │
│  [➡️ Passar Vez]                           │
└─────────────────────────────────────────────┘
```

---

### 4. ConstructionMenu Component

**Responsabilidades:**
- Exibir opções de construção
- Validar recursos disponíveis
- Habilitar/desabilitar botões
- Iniciar modo de posicionamento

**Estrutura:**
```typescript
interface ConstructionOption {
  type: 'road' | 'settlement' | 'city' | 'development';
  cost: ResourceCost;
  enabled: boolean;
  onClick: () => void;
}

const constructions: ConstructionOption[] = [
  {
    type: 'road',
    cost: { wood: 1, brick: 1 },
    label: 'Estrada',
    icon: '🛤️',
  },
  {
    type: 'settlement',
    cost: { wood: 1, brick: 1, sheep: 1, wheat: 1 },
    label: 'Povoação',
    icon: '🏠',
  },
  {
    type: 'city',
    cost: { ore: 3, wheat: 2 },
    label: 'Cidade',
    icon: '🏛️',
  },
];
```

**Estados do Botão:**
- ✅ Habilitado: Verde, clicável
- ❌ Desabilitado: Cinza, opaco, cursor not-allowed
- Tooltip mostra recursos faltantes

---

### 5. BankTradeModal Component

**Responsabilidades:**
- Interface de troca com banco
- Seleção de recursos (enviar/receber)
- Validação de taxa de câmbio
- Confirmação de troca

**Interface:**
```
┌──────────────────────────────────────┐
│  Trocar com Banco                    │
├──────────────────────────────────────┤
│  ENVIAR (Taxa: 4:1)                  │
│  [🪵 Wood] x4                        │
│                                      │
│          ⬇️                          │
│                                      │
│  RECEBER                             │
│  [🧱 Brick] x1                       │
│                                      │
│  [Cancelar]  [Confirmar Troca]       │
└──────────────────────────────────────┘
```

---

### 6. OpponentCard Component

**Responsabilidades:**
- Exibir informações dos adversários
- Mostrar pontos, recursos (quantidade), cavaleiros
- Indicar turno ativo

**Layout Compacto:**
```
┌─────────────────────────────┐
│  🔴 Jogador 2               │
│  ⭐ Pontos: 4               │
│  🎴 Cartas: 7               │
│  ⚔️ Cavaleiros: 3           │
│  🏆 Maior Exército          │
└─────────────────────────────┘
```

---

## 🔄 Fluxo de Estados do Jogo

### Máquina de Estados

```typescript
type GamePhase = 
  | 'WAITING_FOR_PLAYERS'
  | 'INITIAL_PLACEMENT'
  | 'ROLL_DICE'
  | 'MAIN_ACTIONS'
  | 'DISCARD_PHASE'    // Quando rolar 7 e alguém tem >7 cartas
  | 'MOVE_ROBBER'      // Após rolar 7
  | 'GAME_OVER';

type TurnPhase =
  | 'MUST_ROLL'          // Deve rolar dados
  | 'ACTIONS'            // Pode construir, trocar, jogar cartas
  | 'BUILDING_PLACEMENT' // Selecionando local de construção
  | 'ROBBER_PLACEMENT'   // Selecionando hexágono para ladrão
  | 'STEAL_CARD';        // Escolhendo jogador para roubar
```

### Transições de Estado

```typescript
// Hook para gerenciar estado do jogo
const useGameState = () => {
  const [phase, setPhase] = useState<TurnPhase>('MUST_ROLL');
  
  const rollDice = async () => {
    const result = await diceRoll();
    
    if (result === 7) {
      setPhase('DISCARD_PHASE');
      // Depois -> MOVE_ROBBER
    } else {
      distributeResources(result);
      setPhase('ACTIONS');
    }
  };
  
  const startBuilding = (type: BuildingType) => {
    setPhase('BUILDING_PLACEMENT');
  };
  
  const endTurn = () => {
    setPhase('MUST_ROLL');
    // Passar vez para próximo jogador
  };
  
  return { phase, rollDice, startBuilding, endTurn };
};
```

---

## 🎭 Sistema de Validações

### Validação de Construção

```typescript
const canBuild = (
  type: BuildingType,
  resources: Resources,
  boardState: BoardState,
  playerColor: PlayerColor
): ValidationResult => {
  // 1. Verificar recursos
  const hasResources = checkResources(type, resources);
  if (!hasResources) {
    return { valid: false, reason: 'Recursos insuficientes' };
  }
  
  // 2. Verificar regras de posicionamento
  switch (type) {
    case 'road':
      const validRoadPositions = getValidRoadPositions(boardState, playerColor);
      if (validRoadPositions.length === 0) {
        return { valid: false, reason: 'Sem posições válidas para estrada' };
      }
      break;
      
    case 'settlement':
      const validSettlementPositions = getValidSettlementPositions(boardState, playerColor);
      if (validSettlementPositions.length === 0) {
        return { valid: false, reason: 'Sem posições válidas para povoação' };
      }
      break;
      
    case 'city':
      const upgradeableSettlements = getUpgradeableSettlements(boardState, playerColor);
      if (upgradeableSettlements.length === 0) {
        return { valid: false, reason: 'Sem povoações para transformar em cidade' };
      }
      break;
  }
  
  return { valid: true };
};
```

### Validação de Troca

```typescript
const canTrade = (
  offer: Resources,
  request: Resources,
  playerResources: Resources,
  ports: Port[]
): ValidationResult => {
  // 1. Jogador tem os recursos para oferecer?
  const hasOffer = checkHasResources(playerResources, offer);
  if (!hasOffer) {
    return { valid: false, reason: 'Recursos insuficientes para troca' };
  }
  
  // 2. Taxa de câmbio válida?
  const rate = calculateTradeRate(offer, request, ports);
  const requiredAmount = getResourceAmount(offer);
  
  if (requiredAmount < rate) {
    return { valid: false, reason: `Necessário ${rate} recursos para esta troca` };
  }
  
  return { valid: true };
};
```

---

## 🎨 Animações e Transições

### Animações Essenciais

```css
/* animations.css */

/* Dados rolando */
@keyframes dice-roll {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  25% { transform: rotate(90deg) translateY(-10px); }
  50% { transform: rotate(180deg) translateY(0); }
  75% { transform: rotate(270deg) translateY(-10px); }
}

/* Recurso sendo adicionado */
@keyframes resource-fly-in {
  0% {
    transform: translateY(-50px) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: translateY(-25px) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Hexágono produzindo */
@keyframes hex-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0);
  }
}

/* Construção sendo colocada */
@keyframes building-appear {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

/* Ladrão se movendo */
@keyframes robber-move {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Destaque de posição válida */
@keyframes valid-position-pulse {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

/* Toast notification */
@keyframes toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Aplicando Animações

```typescript
// Componente de Hexágono com produção
const Hexagon = ({ isProducing, resource }) => {
  return (
    <div 
      className={cn(
        "hexagon",
        isProducing && "animate-[hex-pulse_1s_ease-in-out]"
      )}
    >
      {/* conteúdo */}
    </div>
  );
};

// Componente de recurso sendo adicionado
const ResourceCard = ({ isNew }) => {
  return (
    <div
      className={cn(
        "resource-card",
        isNew && "animate-[resource-fly-in_0.5s_ease-out]"
      )}
    >
      {/* conteúdo */}
    </div>
  );
};
```

---

## 🔌 Integração Socket.io

### Setup do Cliente

```typescript
// lib/socket.ts
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const initSocket = (gameId: string) => {
  if (socket) return socket;
  
  socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
    query: { gameId },
    transports: ['websocket'],
  });
  
  return socket;
};

export const getSocket = () => {
  if (!socket) throw new Error('Socket not initialized');
  return socket;
};
```

### Hook de Socket

```typescript
// hooks/useSocket.ts
import { useEffect, useState } from 'react';
import { initSocket } from '@/lib/socket';

export const useSocket = (gameId: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    const s = initSocket(gameId);
    setSocket(s);
    
    s.on('connect', () => setIsConnected(true));
    s.on('disconnect', () => setIsConnected(false));
    
    return () => {
      s.disconnect();
    };
  }, [gameId]);
  
  return { socket, isConnected };
};
```

### Eventos do Jogo

```typescript
// hooks/useGame.ts
export const useGame = (gameId: string) => {
  const { socket } = useSocket(gameId);
  const [gameState, setGameState] = useState<GameState | null>(null);
  
  useEffect(() => {
    if (!socket) return;
    
    // Receber estado inicial
    socket.on('game:state', (state: GameState) => {
      setGameState(state);
    });
    
    // Dados rolados
    socket.on('dice:rolled', ({ player, result }) => {
      // Animar dados
      // Distribuir recursos
    });
    
    // Construção realizada
    socket.on('building:placed', ({ player, building, position }) => {
      // Animar construção
      // Atualizar tabuleiro
    });
    
    // Troca realizada
    socket.on('trade:completed', ({ player, offer, receive }) => {
      // Atualizar recursos
    });
    
    // Ladrão movido
    socket.on('robber:moved', ({ player, position, stolenFrom }) => {
      // Animar ladrão
    });
    
    // Turno mudou
    socket.on('turn:changed', ({ currentPlayer }) => {
      // Atualizar indicador de turno
    });
    
    return () => {
      socket.off('game:state');
      socket.off('dice:rolled');
      socket.off('building:placed');
      socket.off('trade:completed');
      socket.off('robber:moved');
      socket.off('turn:changed');
    };
  }, [socket]);
  
  // Ações
  const rollDice = () => socket?.emit('dice:roll');
  const buildRoad = (position: Position) => socket?.emit('building:place', { type: 'road', position });
  const tradeWithBank = (offer: Resources, receive: Resources) => 
    socket?.emit('trade:bank', { offer, receive });
  
  return {
    gameState,
    rollDice,
    buildRoad,
    tradeWithBank,
  };
};
```

---

## 🧪 Testes e Validação

### Checklist de Testes Manuais

#### Fase de Rolagem
- [ ] Botão "Rolar Dados" habilitado apenas no início do turno
- [ ] Animação de dados funciona corretamente
- [ ] Recursos distribuídos conforme números rolados
- [ ] Números 6 e 8 destacados em vermelho
- [ ] Resultado 7 ativa fase do ladrão

#### Construção
- [ ] Botões desabilitados quando recursos insuficientes
- [ ] Tooltip mostra recursos faltantes
- [ ] Modo de construção destaca posições válidas
- [ ] Clicar em posição inválida não faz nada
- [ ] Confirmação antes de construir
- [ ] Animação de construção aparece
- [ ] Recursos deduzidos após construção

#### Troca com Banco
- [ ] Taxa de câmbio correta (4:1, 3:1, 2:1)
- [ ] Validação em tempo real
- [ ] Confirmação necessária
- [ ] Recursos atualizados após troca

#### Cartas de Desenvolvimento
- [ ] Não pode jogar no turno da compra
- [ ] Cavaleiro move ladrão
- [ ] Monopólio coleta recursos corretos
- [ ] Cartas de ponto de vitória ocultas dos outros

#### UI/UX
- [ ] Hover em botões mostra feedback
- [ ] Toast notifications aparecem
- [ ] Painéis de adversários atualizados
- [ ] Indicador de turno visível
- [ ] Sem lag nas animações

---

## 📦 Dependências e Integrações

### Radix UI - Configuração

```typescript
// components/ui/button.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-medium transition-all',
          'hover:scale-105 active:scale-95',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-ui-surface text-white hover:bg-ui-primary': variant === 'default',
            'bg-ui-accent text-white hover:bg-opacity-90': variant === 'primary',
            'bg-state-error text-white hover:bg-opacity-90': variant === 'danger',
            'bg-transparent hover:bg-ui-surface': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
```

### Supabase - Configuração

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Autenticação
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
```

---

## 🚀 Scripts de Desenvolvimento

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Verifica código com ESLint

# Limpeza
npm run clean        # Remove pasta .next
```

### Variáveis de Ambiente

```env
# .env.local
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 📝 Padrões de Código

### Nomenclatura

```typescript
// Componentes: PascalCase
export const GameBoard = () => { };

// Hooks: camelCase com prefixo 'use'
export const useGameState = () => { };

// Constantes: UPPER_SNAKE_CASE
export const MAX_PLAYERS = 4;

// Funções utilitárias: camelCase
export const calculateTradeRate = () => { };

// Tipos/Interfaces: PascalCase
export interface GameState { }
export type PlayerColor = 'red' | 'blue' | 'white' | 'orange';
```

### Estrutura de Componentes

```typescript
// 1. Imports
import { useState } from 'react';
import { cn } from '@/lib/utils';

// 2. Types
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// 3. Component
export const Component = ({ prop1, prop2 }: ComponentProps) => {
  // 3.1 Hooks
  const [state, setState] = useState(false);
  
  // 3.2 Handlers
  const handleClick = () => {
    setState(true);
  };
  
  // 3.3 Render helpers
  const renderContent = () => {
    return <div>Content</div>;
  };
  
  // 3.4 Render
  return (
    <div className="component">
      {renderContent()}
    </div>
  );
};
```

---

## 🎯 Roadmap de Implementação

### Sprint 1: Estrutura Base (Semana 1-2)
- [ ] Setup do projeto Next.js
- [ ] Configuração Tailwind CSS
- [ ] Componentes UI base (Button, Dialog, etc)
- [ ] Estrutura de pastas
- [ ] Configuração Socket.io
- [ ] Página de login/registro

### Sprint 2: Tabuleiro (Semana 3-4)
- [ ] Componente GameBoard
- [ ] Renderização de hexágonos
- [ ] Números de produção
- [ ] Portos
- [ ] Grid de posicionamento
- [ ] Responsividade do tabuleiro

### Sprint 3: Sistema de Dados e Recursos (Semana 5)
- [ ] Componente DiceRoller
- [ ] Animação de dados
- [ ] Distribuição de recursos
- [ ] Componente ResourceCards
- [ ] Sistema de notificações (Toast)

### Sprint 4: Construção (Semana 6-7)
- [ ] Componente ConstructionMenu
- [ ] Validação de recursos
- [ ] Modo de posicionamento
- [ ] Destaque de posições válidas
- [ ] Animações de construção
- [ ] Componentes Road, Settlement, City

### Sprint 5: Troca com Banco (Semana 8)
- [ ] Modal BankTradeModal
- [ ] Lógica de taxa de câmbio
- [ ] Validação de troca
- [ ] Confirmação e execução

### Sprint 6: Cartas de Desenvolvimento (Semana 9)
- [ ] Componente DevelopmentCards
- [ ] Compra de cartas
- [ ] Uso de cartas (Cavaleiro, Progresso)
- [ ] Sistema de ladrão
- [ ] Maior exército

### Sprint 7: Painéis de Jogadores (Semana 10)
- [ ] Componente PlayerPanel
- [ ] Componente OpponentCard
- [ ] Indicador de turno
- [ ] Maior estrada
- [ ] Pontos de vitória

### Sprint 8: Polish e Testes (Semana 11-12)
- [ ] Refinamento de animações
- [ ] Testes de usabilidade
- [ ] Correção de bugs
- [ ] Otimização de performance
- [ ] Documentação final

---

## 🐛 Troubleshooting Comum

### Problema: Hexágonos não renderizam corretamente
**Solução:** Verificar CSS grid e aspect-ratio dos hexágonos

### Problema: Socket não conecta
**Solução:** Verificar URL do servidor e variável de ambiente

### Problema: Animações com lag
**Solução:** Usar `will-change` CSS e React.memo para componentes

### Problema: Validações não funcionam
**Solução:** Verificar sincronização de estado entre cliente e servidor

---

## 📚 Recursos e Referências

### Documentação
- [Next.js Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [Socket.io Client](https://socket.io/docs/v4/client-api/)

### Design Inspiration
- [Colonist.io](https://colonist.io) - Referência de UI
- [Board Game Arena](https://boardgamearena.com) - Experiência multiplayer

### Regras do Catan
- [Regras Oficiais PDF](https://www.catan.com/understand-catan/game-rules)

---

## ✅ Critérios de Sucesso

### UX/UI
- ✅ Jogador entende o que pode fazer a cada momento
- ✅ Feedback visual para todas as ações
- ✅ Sem ações inválidas possíveis
- ✅ Animações fluidas (<100ms de delay)

### Funcionalidade
- ✅ 100% das regras do Catan implementadas
- ✅ Multiplayer real-time funcional
- ✅ Zero crashes durante partida normal
- ✅ Estado do jogo sempre sincronizado

### Performance
- ✅ First Contentful Paint < 1.5s
- ✅ 60 FPS nas animações
- ✅ Latência de rede < 100ms

---

**Última atualização:** 2025-10-31  
**Versão do documento:** 1.0.0  
**Mantido por:** @catan-mvp/web team