ENV['AWS_ACCESS_KEY_ID'] = '0XZN91V3MBE44A05R2R2'
ENV['AWS_SECRET_ACCESS_KEY'] = 'WKVJffwxdw+JNzuRTYfj0SmCMgemiFGnIc+KEYRB'

def s3sync(dir, bucket)
  `#{File.dirname(__FILE__)}/vendor/s3sync/s3sync.rb -p -r #{dir} #{bucket}`
end

desc "Deploy it."
task :deploy do
  s3sync '_site/', 'art440.tjvanslyke.com:'
end

