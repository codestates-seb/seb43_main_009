const path = require('path');
//밑의 플러그인으로 변환된 js파일을 index.html에 연결한다
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env) => {
  console.log(env);
  if (env.DEV) {
    //내가 사실은 이놈을 가르키고 있었다.....env.dev파일이 없엇던거임...
    dotenv.config({ path: './.env.dev' });
  } else {
    dotenv.config({ path: './.env' });
  }

  return {
    mode: 'development',
    //여러개의 모듈로 연결되어 있는 시작점
    //entry가 여러개일 수도 있음
    entry: './src/index.js',
    //dist 폴더에 결과물을 저장
    output: {
      path: path.resolve('./dist'),
      publicPath: '/',
      //dist에 설정되는 파일이름
      filename: 'bundle.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.html$/,
          //webpack에서 html을 처리하기 위해 html-loader추가
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              //이미지 파일을 불러올 때 각 파일의 이름과 확장자로 불러오게
              //hash는 파일을 호출 할 때 최신 파일을 호출할 수 있게 해준다
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    //npx webpack-dev-server로 사용가능 -> package.json에 따로 설정해놔서 간편하게 실행할 수 있게 해놨음
    //npm run dev로 실행하세요
    devServer: {
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
      open: true,
    },
  };
};
