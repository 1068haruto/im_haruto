# Node.jsの軽量公式イメージを使用する
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係の定義ファイルを先にコピーする（キャッシュを効かせる）
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# アプリ本体をコピー
COPY . .

# 開発用サーバー起動（ホットリロード付き）
CMD ["npm", "run", "dev"]